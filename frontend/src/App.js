import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import DevicesCardCollection from './components/DevicesCardCollection'
import DeviceForm from './components/DeviceForm'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarFooter, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import { faServer, faQuestion, faTachometerAlt, git } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import WaterDepthSensorWidget from './components/widgets/WaterDepthSensorWidget'
import sidebar from './components/Sidebar'
import 'react-pro-sidebar/dist/css/styles.css';
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
        <div style= {{width:"50%", height:"100%", float:"left"}}>{sidebar}</div>
        <div style= {{width:"50%", height:"100%", float:"left"}}>
            <DevicesCardCollection></DevicesCardCollection>
            <WaterDepthSensorWidget deviceID={"8abb809773fedb7d0173fedb8ba60000"}></WaterDepthSensorWidget>
        </div>
    </div>

  );
}
// <DevicesCardCollection></DevicesCardCollection>
// <DeviceForm></DeviceForm>
export default App;
