import os

from APIHelper import APIHelper
import json
import shutil
import time
import subprocess
def build_main_class(template_file, destination_file, data_types, sensors):
    includes = ''
    classInits = ''

    # Includes
    for data in data_types:
        if data in config['dependencies']:
            includes += "#include <{}>\n".format(config['dependencies'][data]['include'])

    # Initialisations
    for sensor in sensors:
        if sensor['outputDataType'] in config['dependencies']:
            classInits += "scheduler.add(new {}(\"{}\"));\n" \
                .format(config['dependencies'][sensor['outputDataType']]['className'], sensor['id'])

    template = open(template_file, 'r')
    output_main = open(destination_file, 'w')

    for tempLine in template.readlines():
        if tempLine.__contains__("{INCLUDES_MARKER}"):
            output_main.write(includes)
        elif tempLine.__contains__("{INIT_TASK_MARKER}"):
            output_main.write(classInits)
        else:
            output_main.write(tempLine)


def build_run_parameters(template_file, destination_file):
    shutil.copy(template_file, destination_file)


def copy_dependant_classes(dependants_location, destination, data_types):
    for data in data_types:
        if data in config['dependencies']:
            for file in config["dependencies"][data]["files"]:
                shutil.copy(os.path.join(dependants_location, file), os.path.join(destination, file))


def execute_pio_build(project_dir, firmware_location_out, name):
    pio_build_out = subprocess.Popen(["/usr/local/bin/platformio", "run", "-d", project_dir],
                                     stdout=subprocess.PIPE,
                                     stderr=subprocess.STDOUT)
    _, stderr = pio_build_out.communicate()

    if stderr is not None:
        print(stderr)
        return None, False

    shutil.copy(os.path.join(project_dir, ".pio/build/nano_33_iot/firmware.bin"), firmware_location_out)
    final_bin = os.path.join(firmware_location_out, name)
    shutil.move(os.path.join(firmware_location_out, "firmware.bin"), final_bin)

    return final_bin, True

def build_host(host):
    sensors = eval(api.get_sensors(host['id']))
    output_data_clean = list(set([sensor['outputDataType'] for sensor in sensors]))

    os.makedirs(outputDirectory, exist_ok=True)
    build_directory = os.path.join(outputDirectory, "build-{}/".format( host['id']))

    shutil.copytree(os.path.join(hostFirmwareLocation, config["firmwareBaseLocation"]), build_directory)

    dependants_base = os.path.join(hostFirmwareLocation, config["dependantsBaseLocation"])
    build_main_class(os.path.join(dependants_base, config["mainClass"]),
                     os.path.join(build_directory,"src/", config["mainClass"]), output_data_clean, sensors)

    build_run_parameters(os.path.join(dependants_base,config["runParameterClass"]),
                         os.path.join(build_directory,"src/", config["runParameterClass"]))

    copy_dependant_classes(dependants_base, os.path.join(build_directory, "src/"), output_data_clean)

    binary_file = outputDirectory
    out, successful = execute_pio_build(build_directory, binary_file, "firmware-{}.bin".format(host["id"]))

    return out if successful else None

def build():
    for host in eval(api.get_hosts()):
        print("Building {} (ID: {})".format(host['deviceName'], host['id']))
        start = time.time()
        out = build_host(host)
        if out is not None:
            print(out)
            print("DONE ({}s)".format(time.time() - start))
        else:
            print("Build failed on {}".format(host['id']))
if __name__ == '__main__':

    hostFirmwareLocation = os.path.abspath("firmware_template")
    configLocation = os.path.join(hostFirmwareLocation, "config.json")
    config = json.load(open(configLocation))
    outputDirectory = os.path.abspath("output")

    api = APIHelper("10.59.0.23", 8080)
    if(api.connect()):
        print("Building...")
        build()
    else:
        print("ERROR: Could not connect to API")


