import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import DeviceOverview from './components/DeviceOverview'
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
  var itemList = ['test', 'ing', 'YEs'];
  for(var a =0; a<limit-3; a++) {
      itemList.push('test');
  }
    const components = itemList.map((item) => <GridListTile key="Subheader" cols={0} style={{ height: 'auto', width: 400 }}>
        <DeviceOverview name={item}></DeviceOverview>
    </GridListTile>



    );
  return (<ul>{components}</ul>);
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
      <GridList cellHeight={50} className={classes.gridList}>
      {createList(15)}

      )}
      </GridList>
    </div>
  );
}
export default App;
