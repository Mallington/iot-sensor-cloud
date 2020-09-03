import React from 'react';
import DeviceOverview from "./DeviceOverview";
import "../styles/CardCollection.css"
class DevicesCardCollection extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            devices:null,
            projectTitle: props.projectTitle
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
            <div>
            <h1>{this.state.projectTitle}</h1>
            <div className="card-element" style={{background: '#1F2336',borderRadius:'2px'}}>
            <ul className="hs full" style={{overflow: 'hidden'}}>{components}</ul>
                <h1>+ Add New Device</h1>
            </div>
            </div>
        )
    }
}
export default DevicesCardCollection;