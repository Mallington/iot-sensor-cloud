import os
import shutil
import subprocess
import json
from FileUtils import replace_markers_lines, replace_markers
class FirmwareBuilder:
    def __init__(self, template_firmware_location, output_directory, api):
        self.hostFirmwareLocation = template_firmware_location
        self.outputDirectory = output_directory
        self.api = api

        self.config = json.load(open(os.path.join(self.hostFirmwareLocation, "config.json")))

    def build_main_class(self, template_file, destination_file, data_types, sensors):
        includes = ''
        class_inits = ''

        # Includes
        for data in data_types:
            if data in self.config['dependencies']:
                includes += "#include <{}>\n".format(self.config['dependencies'][data]['include'])

        # Initialisations
        for sensor in sensors:
            if sensor['outputDataType'] in self.config['dependencies']:
                class_inits += "scheduler.add(new {}(\"{}\"));\n" \
                    .format(self.config['dependencies'][sensor['outputDataType']]['className'], sensor['id'])

        replace_markers_lines(template_file, destination_file,
                              [["{INCLUDES_MARKER}", includes], ["{INIT_TASK_MARKER}", class_inits]])

    def build_run_parameters(self, template_file, destination_file, host):
        device_params = json.loads(self.api.get_device_configuration(host['id']))
        print(device_params)
        replace_markers(template_file, destination_file,
                              [["$SSID_LOCATION", device_params['ssid']],
                               ["$WIFI_PASSWORD", device_params['wifiPassword']],
                               ["$API_ADDRESS", device_params["apiEndpoint"]],
                               ["$API_PORT", device_params["port"]],
                               ["$DEVICE_ID", host['id']]
                               ])

    def copy_dependant_classes(self, dependants_location, destination, data_types):
        for data in data_types:
            if data in self.config['dependencies']:
                for file in self.config["dependencies"][data]["files"]:
                    shutil.copy(os.path.join(dependants_location, file), os.path.join(destination, file))

    def generate_templates(self, host, build_directory):
        sensors = eval(self.api.get_sensors(host['id']))
        output_data_clean = list(set([sensor['outputDataType'] for sensor in sensors]))

        dependants_base = os.path.join(self.hostFirmwareLocation, self.config["dependantsBaseLocation"])
        self.build_main_class(os.path.join(dependants_base, self.config["mainClass"]),
                         os.path.join(build_directory, "src/", self.config["mainClass"]), output_data_clean, sensors)

        self.build_run_parameters(os.path.join(dependants_base, self.config["runParameterClass"]),
                             os.path.join(build_directory, "src/", self.config["runParameterClass"]), host)

        self.copy_dependant_classes(dependants_base, os.path.join(build_directory, "src/"), output_data_clean)

    def execute_pio_build(self, project_dir, firmware_location_out, name):
        pio_build_out = subprocess.Popen(["/usr/local/bin/platformio", "run", "-d", project_dir],
                                         stdout=subprocess.PIPE,
                                         stderr=subprocess.STDOUT)
        _, stderr = pio_build_out.communicate()

        if stderr is not None:
            print(stderr)
            return None, False

        firmware_location = os.path.join(project_dir, ".pio/build/nano_33_iot/firmware.bin")
        print("CHECK")
        if not os.path.exists(firmware_location_out):
            return None, False

        shutil.copy(firmware_location, firmware_location_out)
        final_bin = os.path.join(firmware_location_out, name)
        shutil.move(os.path.join(firmware_location_out, "firmware.bin"), final_bin)

        return final_bin, True

    def build_host(self, host):
        os.makedirs(self.outputDirectory, exist_ok=True)
        build_directory = os.path.join(self.outputDirectory, "build-{}/".format(host['id']))
        shutil.copytree(os.path.join(self.hostFirmwareLocation, self.config["firmwareBaseLocation"]), build_directory)

        self.generate_templates(host, build_directory)

        return self.execute_pio_build(build_directory, self.outputDirectory, "firmware-{}.bin".format(host["id"]))
