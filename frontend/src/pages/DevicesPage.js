import React from 'react'
import DevicesCardCollection from "../components/DevicesCardCollection";
import HostDevicesTable from "../components/HostDevicesTable"
export default class DevicesPage extends React.Component {
    render() {
        return (

            <div>
                <h1>Device Manager</h1>
                    <HostDevicesTable/>
            </div>
        );
    }
}