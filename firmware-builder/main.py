import os

from APIHelper import APIHelper
from FirmwareBuilder import FirmwareBuilder
import json
import time


def build():
    builder = FirmwareBuilder(hostFirmwareLocation, outputDirectory, config, api)

    for host in eval(api.get_hosts()):
        print("Building {} (ID: {})".format(host['deviceName'], host['id']))
        start = time.time()
        out = builder.build_host(host)
        if out is not None:
            print(out)
            print("DONE ({}s)".format(time.time() - start))
        else:
            print("Build failed on {}".format(host['id']))


if __name__ == '__main__':
    apiIP = "10.59.0.23"
    apiPort = 8080
    hostFirmwareLocation = os.path.abspath("../host-firmware")
    configLocation = os.path.join(hostFirmwareLocation, "config.json")
    outputDirectory = os.path.abspath("output")

    config = json.load(open(configLocation))

    api = APIHelper(apiIP, apiPort)
    if api.connect():
        print("Building...")
        build()
    else:
        print("ERROR: Could not connect to API")


