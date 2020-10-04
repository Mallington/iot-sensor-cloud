import React from 'react';
import DeviceOverview from "./DeviceOverview";
import "../styles/CardCollection.css"
import HorizontalScroll from 'react-scroll-horizontal'
class DevicesCardCollection extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            devices:null,
            host: this.props.host
        };

    }
    fetchData= () =>{
        fetch('/devices?parentId='+this.state.host.id)
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
        const child   = { width: `25em`, height: `15em`, paddingLeft:`2em`, paddingRight:`2em`, textAlign:'center'}
        const parent  = { width: `100%`, height: `15em`, background: '#1F2336',borderRadius:'2px'}
        const mystyleBody = {
            color: "#adadad",
            background: '#222741',
            height:'90%',
            fontFamily: "Roboto",
            margin: 'auto',
            width: '90%',
            border: '3px dashed white',
            marginTop:'2.5%',


        }
      const components = (this.state.devices!=null)?
          this.state.devices.map((item) =>  <div style={child}><DeviceOverview key={item.id} deviceID={item.id}/></div>)
            : (<h1>Loading</h1>);
        return(
            <div>
            <h1>{this.state.host.deviceName}</h1>
            <div style={parent} >


                <HorizontalScroll animValues={10000} style={{textAlign: 'left'}}>
                        <div style={child}><DeviceOverview deviceID={this.state.host.id}/></div>

                    <div style={child}>
                        <div style={mystyleBody}>
                            <h1 style={{ backgroundColor: "#22273E", textAlign:'center'}}>+ Add a new device</h1>
                        </div>


                    </div>

                    {components}
                    <div style={child}/>
                    <div style={child}/>
                    <div style={child}/>
                    <div style={child}/>
                </HorizontalScroll>

            </div>
            </div>
        )

        // const components = (this.state.devices!=null)?
        //     this.state.devices.map((item) =>  <li key={item.id}><DeviceOverview deviceID={item.id}></DeviceOverview></li>)
        //     : (<h1>Loading</h1>);
        //
        // return (
        //     <Container>
        //
        //     </Container>
        //
        //
        // );
    }
}
export default DevicesCardCollection;