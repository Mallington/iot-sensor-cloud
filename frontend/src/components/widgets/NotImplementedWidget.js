import React, { Component } from 'react';
import '../../styles/welcome-card.css'
import Button from 'react-bootstrap/Button'
import {Link} from "react-router-dom";
import {MenuItem} from "react-pro-sidebar";
import DeviceConfig from "../../configs/DeviceConfig";

class NotImplementedWidget extends Component {
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
        return (
            <div className="card-element">
                <h1>Woops.</h1>
                <h2>The device <b>{this.state.device.deviceName}</b> with the output data type <b>{(this.state.device.outputDataType==null)?"None":this.state.device.outputDataType}</b> could not be displayed.</h2>
            </div>

        );
    }
}

export default NotImplementedWidget;