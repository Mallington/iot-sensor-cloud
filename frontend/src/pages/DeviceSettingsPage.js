import React from 'react'
import DevicesCardCollection from "../components/DevicesCardCollection";
import HostDevicesTable from "../components/HostDevicesTable"
export default class DeviceSettingsPage extends React.Component {
    render() {
        return (

            <div>
                <h1>Device Settings</h1>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}