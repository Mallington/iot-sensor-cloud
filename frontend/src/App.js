import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import DevicesCardCollection from './components/DevicesCardCollection'
import DeviceForm from './components/DeviceForm'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarFooter, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import { faServer, faQuestion, faTachometerAlt, git } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 1500,
        height: 450,
    },
}));
function createList(limit){

  var deviceList = fetch('/api/devices/')
  var deviceList = fetch('/api/devices/')
        .then(response => response.json()).
  console.log(deviceList);

    /*const components = deviceList.map((item) => <GridListTile key="Subheader" cols={0} style={{ height: 'auto', width: 400 }}>
        <DeviceOverview deviceID={item.id}></DeviceOverview>
    </GridListTile>



    );
  return (<ul>{components}</ul>); */
    return (<h1>Bruh</h1>)
}
function App() {
    const classes = useStyles();
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit hello <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}<FontAwesomeIcon icon={faQuestion}/>
        <ProSidebar
            // image={image ? sidebarBg : false}
            // rtl={rtl}
            // collapsed={collapsed}
            // toggled={toggled}
            // breakPoint="md"
            // onToggle={handleToggleSidebar}
        >
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
        </ProSidebar>
      <DevicesCardCollection></DevicesCardCollection>
        <DeviceForm></DeviceForm>
    </div>
  );
}
export default App;
