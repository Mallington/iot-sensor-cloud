import requests


class APIHelper:

    def __init__(self, api_endpoint, api_port):
        self.apiEndpoint = api_endpoint
        self.apiPort = api_port

    @property
    def apiPath(self):
        return "http://{}:{}".format(self.apiEndpoint, self.apiPort)

    def build_url(self, path):
        return "{}{}".format(self.apiPath, path)

    def connect(self):
        try:
            return requests.get(self.build_url("/devices?deviceType=HOST")).ok
        except requests.exceptions.ConnectionError:
            return False

    def get_hosts(self):
        return requests.get(self.build_url("/devices?deviceType=HOST")).content

    def get_sensors(self, parent_id):
        return requests.get(self.build_url("/devices?parentId={}".format(parent_id))).content

    def get_device_configuration(self, device_id):
        #        return requests.get(self.build_url("/device/id/configuration".format(device_id))).content
        # Temporary
        return requests.get(self.build_url("/device-configurations/8abb809774de86d40174de8700640000")).content
