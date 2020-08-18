import {Menu, MenuItem, ProSidebar, SidebarContent, SidebarFooter, SidebarHeader, SubMenu} from "react-pro-sidebar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuestion, faHome, faCog, faProjectDiagram, faCode} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const sidebar = ()=>{
    return(  <ProSidebar>
        <SidebarHeader>
            <div
                style={{
                    padding: '24px',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    fontSize: 14,
                    letterSpacing: '1px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                }}
            >
                Device Watcher
            </div>
        </SidebarHeader>

        <SidebarContent>
            <Menu iconShape="circle">
                <MenuItem
                    icon={<FontAwesomeIcon icon={faHome}/>}
                >
                    dashboard
                </MenuItem>
                <MenuItem icon={<FontAwesomeIcon icon={faProjectDiagram}/>}> Projects</MenuItem>
                <MenuItem icon={<FontAwesomeIcon icon={faCode}/>}> Device Manager</MenuItem>
                <MenuItem icon={<FontAwesomeIcon icon={faCog}/>}> Preferences</MenuItem>
            </Menu>
        </SidebarContent>

        <SidebarFooter style={{ textAlign: 'center' }}>
            <div
                className="sidebar-btn-wrapper"
                style={{
                    padding: '20px 24px',
                }}
            >
                <a
                    href="https://github.com/azouaoui-med/react-pro-sidebar"
                    target="_blank"
                    className="sidebar-btn"
                    rel="noopener noreferrer"
                >

                    <span> Source</span>
                </a>
            </div>
        </SidebarFooter>
    </ProSidebar>);
};
export default sidebar();