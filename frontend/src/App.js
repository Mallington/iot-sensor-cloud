import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import DevicesCardCollection from './components/DevicesCardCollection'
import DeviceForm from './components/DeviceForm'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarFooter, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import { faServer, faQuestion, faTachometerAlt, git } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import WaterDepthSensorWidget from './components/widgets/WaterDepthSensorWidget'
import IMUSensorWidget from './components/widgets/IMUSensorWidget'
import Sidebar from './components/Sidebar'
import Main from './Main.js'
import { Container, Row, Col } from 'react-grid-system';
import 'react-pro-sidebar/dist/css/styles.css';
import "./styles/CardCollection.css"
const useStyles = makeStyles((theme) => ({
    root: {
        width: '50%',
        height: '50%',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 1500,
        height: 450,
    },
}));

function App() {
    const classes = useStyles();
  return (

      <div className="App" >
       <Sidebar/>
       <Main/>

            {/*<div style= {{width:"50%", height:"100%", float:"left"}}>{sidebar}</div>*/}
            {/*<div style= {{width:"50%", height:"100%", float:"left"}}>*/}
            {/*    <DevicesCardCollection></DevicesCardCollection>*/}

            {/*    <ul className="hs full">*/}
            {/*        <li><IMUSensorWidget deviceID={"8abb809774343cc001743447de0a0000"}/></li>*/}
            {/*        <li><WaterDepthSensorWidget  deviceID={"8abb809773fedb7d0173fedb8ba60000"}/></li>*/}
            {/*    </ul>*/}


            {/*</div>*/}

      </div>



  );
}
// <DevicesCardCollection></DevicesCardCollection>
// <DeviceForm></DeviceForm>
export default App;
