import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import DevicesCardCollection from './components/DevicesCardCollection'
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
      {/*</header>*/}
      <DevicesCardCollection></DevicesCardCollection>
    </div>
  );
}
export default App;
