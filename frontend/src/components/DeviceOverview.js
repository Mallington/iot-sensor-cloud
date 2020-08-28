import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DeviceConfig from '../configs/DeviceConfig'
class DeviceOverview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deviceID:props.deviceID,
            device: DeviceConfig.empty
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
            fontFamily: "Roboto",

        };
        const mystyleBody = {
            color: "white",
            backgroundColor: "#2B2B2B",
            height:200,

            fontFamily: "Roboto"
        };
        return (

            <div style={mystyleBody}>
                <h2 style={mystyle}>{this.state.device.deviceName} | <FontAwesomeIcon icon={DeviceConfig.GetIcon(this.state.device.deviceType)} /></h2>
                <h3>Device Type: {this.state.device.deviceType}</h3>
                {(this.state.device.outputDataType!=null)?(<h4>Output Data: {this.state.device.outputDataType}</h4>):(null)}
                <h6>Device UID: {this.state.device.id} | Parent UID: {(this.state.device.parentId!=null)?this.state.device.parentId:"No Parents"}</h6>
            </div>
        );
    }
}
export default DeviceOverview;