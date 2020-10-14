import React from 'react'
import Form from 'react-bootstrap/Form';
import DeviceForm from "../components/DeviceForm";
export default class DeviceSettingsPage extends React.Component {
    render() {
        return (

            <div style={{marginLeft:'20%', marginRight:'20%'}}>
                <h1>Device Settings</h1>
               <DeviceForm deviceID={null}/>

            </div>
        );
    }
}