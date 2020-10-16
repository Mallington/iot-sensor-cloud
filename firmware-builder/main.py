import os
import argparse
from APIHelper import APIHelper
from FirmwareBuilder import FirmwareBuilder
import time
import shutil


def build():
    builder = FirmwareBuilder(hostFirmwareLocation, outputDirectory, api)

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
    parser = argparse.ArgumentParser(description='A CLI for building iot sensor firmware')
    parser.add_argument('-host', type=str,
                        help='The api endpoint')
    parser.add_argument('-port', type=int,
                        help='The api port number', default=8080)
    parser.add_argument('-template', type=str,
                        help='Location for base template firmware')
    parser.add_argument('-output', type=str, default="output",
                        help='Save location for firmware binaries')
    args = parser.parse_args()


    if (args.host is None or args.template is None):
        parser.print_help()
        parser.exit(status=1)

    apiIP = args.host
    apiPort = args.port
    hostFirmwareLocation = os.path.abspath(args.template)

    outputDirectory = os.path.abspath(args.output)

    if os.path.exists(outputDirectory):
        shutil.rmtree(outputDirectory)


    api = APIHelper(apiIP, apiPort)
    if api.connect():
        print("Building...")
        build()
    else:
        print("ERROR: Could not connect to API")


