import React from 'react'
import DevicesCardCollection from "../components/DevicesCardCollection";
import DeviceConfig from "../configs/DeviceConfig";
export default class ProjectsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hosts: []
        };

    }
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
    render() {
        return (

            <div>
                {this.state.hosts.map((host)=><DevicesCardCollection key={host.id} host={host}/>)}
            </div>
        );
    }
}