import React from 'react';
import DeviceOverview from "./DeviceOverview";
import "../styles/CardCollection.css"
class DevicesCardCollection extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            devices:null
        };

    }
    fetchData= () =>{
        fetch('/devices/')
            .then(response => response.json())
            .then(devices => this.setState({devices: devices}));
    }

    componentDidMount(){
        this.fetchData();
        this.timer = setInterval(this.fetchData, 5000);
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render() {

        const components = (this.state.devices!=null)?
            this.state.devices.map((item) =>  <li key={item.id}><DeviceOverview deviceID={item.id}></DeviceOverview></li>)
            : (<h1>Loading</h1>);
        return(
            <div className="container">

            <ul className="hs full">{components}</ul>
            </div>
        )
    }
}
export default DevicesCardCollection;