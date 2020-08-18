import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faServer } from '@fortawesome/free-solid-svg-icons'
import DeviceConfig from '../configs/DeviceTypeMaps'
class DeviceOverview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deviceID:props.deviceID,
            device: {
                "id":undefined,
                "deviceName": undefined,
                "deviceType": undefined,
                "parentId": undefined,
                "outputDataType": undefined,
                "pinMap": []
            }
        };

    }

    fetchData= () =>{
        fetch('/devices/'+this.state.deviceID)
            .then(response => response.json())
            .then(device => this.setState({device: device}));
    }

    componentDidMount(){
        this.fetchData();
        this.timer = setInterval(this.fetchData, 5000);
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        const mystyle = {
            color: "white",
            backgroundColor: "black",
            padding: "10px",
            fontFamily: "Roboto"
        };
        const mystyleBody = {
            color: "white",
            backgroundColor: "#2B2B2B",

            fontFamily: "Roboto"
        };
        return (
            <div style={mystyleBody}>
                <h1 style={mystyle}>{this.state.device.deviceName} <FontAwesomeIcon icon={DeviceConfig.GetIcon(this.state.device.deviceType)} /></h1>
                <h2>Device Type: {this.state.device.deviceType}</h2>
                {(this.state.device.outputDataType!=null)?(<h3>Output Data: {this.state.device.outputDataType}</h3>):(null)}
                <h5>Device UID: {this.state.device.id} | Parent UID: {(this.state.device.parentId!=null)?this.state.device.parentId:"No Parents"}</h5>

            </div>
        );
    }
}
export default DeviceOverview;