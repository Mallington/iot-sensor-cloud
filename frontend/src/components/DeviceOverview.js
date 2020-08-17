import React from 'react';
class DeviceOverview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            device:{}
        };

    }

    fetchData= () =>{
        fetch('/devices/8abb809773f7acb60173f7ad69410000')
            .then(response => response.json())
            .then(device => this.setState({device}));
    }

    componentDidMount(){
        this.fetchData();
        setInterval(this.fetchData, 5000);
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
        console.log(this.state.device)
        return (
            <div style={mystyleBody}>
                <h1 style={mystyle}>{this.state.device.deviceName}</h1>
                <h2>Device Type: {this.state.device.deviceType}</h2>
                <h3>Output Data: {this.state.device.outputDataType}</h3>
                <h3>Device UID: {this.state.device.id}</h3>

            </div>
        );
    }
}
export default DeviceOverview;