import React from 'react';
import DeviceConfig from "../configs/DeviceConfig";
import Form from "react-bootstrap/Form";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const pinConfig= (pinType=null, hostPin,nodePin)=>{
    return {
        pinType: (pinType==null)? "DIGITAL": pinType,
        hostPin: hostPin,
        nodePin: nodePin
    };
};
class DeviceForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            device:
                {
                    id: props.deviceID,
                    deviceName: "Hello There!",
                    deviceType: "HOST",
                    parentId: "",
                    outputDataType: "",
                    pinMap: [],
                    deviceConfigurationID: ""
                },
            hosts:[],
            ready:false
        }

        };

    fetchData= () =>{
        fetch('/devices?deviceType=HOST')
            .then(response => response.json())
            .then(devices => this.setState({hosts: devices}));
    }

    componentDidMount(){
        this.fetchData();
        this.timer = setInterval(this.fetchData, 5000);
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }




    render(){
        var handleChange =(event) =>{
            var copy = this.state.device;
            copy.deviceType= event.target.value;
            this.setState({device:copy});
            console.log(this.state.device)
        };
        return (
            <div style={{textAlign:"left", color:"white"}}>

                <div style={{textAlign:"center"}}>
                    <h2> <FontAwesomeIcon icon={DeviceConfig.GetIcon(this.state.device.deviceType)} /> {(this.state.device.id==null)?"Creating New "+ this.state.device.deviceType: "Editing "+this.state.device.id} </h2>

                </div>

            <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Device type</Form.Label>
                    <Form.Control value={this.state.device.deviceType} onChange={handleChange}  as="select">
                        <option>HOST</option>
                        <option>SENSOR</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Device Name</Form.Label>
                    <Form.Control  placeholder="Fancy Name" >{this.state.deviceName}</Form.Control>
                </Form.Group>

                {(this.state.device.deviceType==="HOST")?
                    (<div>
                        <Form.Group controlId="exampleForm.apiEndpoint">
                            <Form.Label>API Endpoint</Form.Label>
                            <Form.Control  placeholder="e.g 10.59.0.23"/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.port">
                            <Form.Label>API Port</Form.Label>
                            <Form.Control  placeholder="e.g 8080"/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ssid">
                            <Form.Label>WiFi SSID</Form.Label>
                            <Form.Control  placeholder="e.g Oracle-Corp"/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.wifiPassword">
                            <Form.Label>WiFi Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </div>):
                    ( <div>
                        <Form.Group controlId="exampleForm.ControlSelect2" >
                        <Form.Label>Select a parent</Form.Label>
                        <Form.Control as="select">
                            <option>Orphan</option>
                            {this.state.hosts.map( (host)=><option key={host.id}>{host.deviceName}</option>)}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect3" >
                    <Form.Label>Select an output</Form.Label>
                    <Form.Control as="select">
                        <option>No Output</option>
                        <option>IMUSensorEvent</option>
                        <option>SonicEvent</option>
                        <option>WaterDepthEvent</option>
                    </Form.Control>
                    </Form.Group>
                        </div>
                    )

                }



            </Form>
            </div>


        );
    }
}
export default DeviceForm;