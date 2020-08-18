import {Menu, MenuItem, ProSidebar, SidebarContent, SidebarFooter, SidebarHeader, SubMenu} from "react-pro-sidebar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuestion} from "@fortawesome/free-solid-svg-icons";
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
                Sidebar Title
            </div>
        </SidebarHeader>

        <SidebarContent>
            <Menu iconShape="circle">
                <MenuItem
                    icon={<FontAwesomeIcon icon={faQuestion}/>}
                    suffix={<span className="badge red">new</span>}
                >
                    dashboard
                </MenuItem>
                <MenuItem icon={<FontAwesomeIcon icon={faQuestion}/>}> Components</MenuItem>
            </Menu>
            <Menu iconShape="circle">
                <SubMenu
                    suffix={<span className="badge yellow">3</span>}
                    title={"Title test"}
                    icon={<FontAwesomeIcon icon={faQuestion}/>}
                >
                    <MenuItem> 1</MenuItem>
                    <MenuItem>2</MenuItem>
                    <MenuItem>3</MenuItem>
                </SubMenu>

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