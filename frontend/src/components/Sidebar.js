import {Menu, MenuItem, ProSidebar, SidebarContent, SidebarFooter, SidebarHeader, SubMenu} from "react-pro-sidebar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuestion, faHome, faCog, faProjectDiagram, faCode} from "@fortawesome/free-solid-svg-icons";
import { FaGithub } from 'react-icons/fa';
import React from "react";
import { Link } from 'react-router-dom';

import '../styles/sidebar.css'
const Sidebar = ({})=>{
    return(  <ProSidebar>
        <SidebarHeader>
            <div className="title">
                IoT Sensor Cloud
            </div>
        </SidebarHeader>

        <SidebarContent>
            <Menu iconShape="circle">
                <MenuItem
                    icon={<FontAwesomeIcon icon={faHome}/>}
                >Dashboard <Link to="/" />
                </MenuItem>
                <MenuItem icon={<FontAwesomeIcon icon={faProjectDiagram}/>}>Projects <Link to="/projects" /></MenuItem>
                <MenuItem icon={<FontAwesomeIcon icon={faCode}/>}>Device Manager <Link to="/devices" /></MenuItem>
                <MenuItem icon={<FontAwesomeIcon icon={faCog}/>}>Preferences<Link to="/preferences" /></MenuItem>
            </Menu>
        </SidebarContent>

        <SidebarFooter style={{ textAlign: 'center' }}>
            <div
                className="sidebar-btn-wrapper"
                style={{
                    color: "white",
                    padding: '20px 24px'
                }}
            >
                <a
                    href="https://github.com/Mallington/iot-sensor-cloud"
                    target="_blank"
                    className="sidebar-btn"
                    rel="noopener noreferrer"
                    className="sidebar-btn-wrapper"
                    style={{
                        color: "white",
                        textDecoration: 'none'
                    }}
                >
                    <FaGithub size={'1em'}>hello</FaGithub>
                    <span> Mallington/iot-sensor-cloud</span>
                </a>
            </div>
        </SidebarFooter>
    </ProSidebar>);
};
export default Sidebar;