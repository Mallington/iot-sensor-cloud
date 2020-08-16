import React from 'react';
import logo from './logo.svg';
import './App.css';
import DeviceOverview from './components/DeviceOverview'

function createList(limit){
  const itemList = ['test', 'ing', 'YEs'];
  const components = itemList.map((item)=> <DeviceOverview name={item}></DeviceOverview>);
  return (<ul>{components}</ul>);
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit hello <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {createList(5)}
    </div>
  );
}
export default App;
