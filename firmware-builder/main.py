from APIHelper import APIHelper
import json
if __name__ == '__main__':
    configLocation = "config.json"
    config = json.load(open(configLocation))
    print(config)

    api = APIHelper("10.59.0.23", 8080)
    print(api.connect())
    print("Running firmware builder")

    for host in eval(api.get_hosts()):
        print("Building {} (ID: {})".format(host['deviceName'], host['id']))

        sensors = eval(api.get_sensors(host['id']))
        outputDataClean = list(set([sensor['outputDataType'] for sensor in sensors]))

        includes = ''
        classInits = ''

        # Includes
        for data in outputDataClean:
            if data in config['dependencies']:
                includes += "#include <{}>\n".format(config['dependencies'][data]['include'])

        # Initialisations
        for sensor in sensors:
            if sensor['outputDataType'] in config['dependencies']:
                classInits += "scheduler.add(new {}(\"{}\"));\n"\
                    .format(config['dependencies'][sensor['outputDataType']]['className'], sensor['id'])
        print(includes)
        print(classInits)

