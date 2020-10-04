import React from 'react'
import Form from 'react-bootstrap/Form';
import DeviceForm from "../components/DeviceForm";
export default class DeviceSettingsPage extends React.Component {
    render() {
        return (

            <div>
                <h1>Device Settings</h1>
                <DeviceForm deviceID={null}/>
            </div>
        );
    }
}