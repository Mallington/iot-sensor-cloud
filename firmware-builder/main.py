import os

from APIHelper import APIHelper
import json
import shutil


def build_main_class(template_file, destination_file, data_types, sensors):
    includes = ''
    classInits = ''
    print(template_file, destination_file)
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
    print(template_file, destination_file)
    shutil.copy(template_file, destination_file)


def copy_dependant_classes(dependants_location, destination, data_types):
    for data in data_types:
        if data in config['dependencies']:
            for file in config["dependencies"][data]["files"]:
                print(os.path.join(dependants_location, file), os.path.join(destination, file))
                shutil.copy(os.path.join(dependants_location, file), os.path.join(destination, file))

    print("TODO")


def build_host(host):
    sensors = eval(api.get_sensors(host['id']))
    output_data_clean = list(set([sensor['outputDataType'] for sensor in sensors]))
    build_directory = os.path.join(hostFirmwareLocation, "build-{}/".format( host['id']))
    print(output_data_clean)

    shutil.copytree(os.path.join(hostFirmwareLocation, config["firmwareBaseLocation"]), build_directory)

    dependants_base = os.path.join(hostFirmwareLocation, config["dependantsBaseLocation"])
    build_main_class(os.path.join(dependants_base, config["mainClass"]),
                     os.path.join(build_directory,"src/", config["mainClass"]), output_data_clean, sensors)

    build_run_parameters(os.path.join(dependants_base,config["runParameterClass"]),
                         os.path.join(build_directory,"src/", config["runParameterClass"]))

    copy_dependant_classes(dependants_base, os.path.join(build_directory, "src/"), output_data_clean)

def build():
    for host in eval(api.get_hosts()):
        print("Building {} (ID: {})".format(host['deviceName'], host['id']))
        build_host(host)

if __name__ == '__main__':

    hostFirmwareLocation = os.path.abspath("firmware_template")
    configLocation = os.path.join(hostFirmwareLocation, "config.json")
    config = json.load(open(configLocation))
    print(config)

    api = APIHelper("10.59.0.23", 8080)
    print(api.connect())

    print("Running firmware builder")
    build()


