import React from 'react'
import Button from 'react-bootstrap/Button'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import DeviceConfig from '../configs/DeviceConfig'
import '../styles/react-table.css'


import { RiInstallLine } from 'react-icons/ri';
import { VscListSelection,VscCloudDownload, VscTrash, VscSettingsGear } from "react-icons/vsc";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const columns = [{
  dataField: 'id',
  text: 'Device ID'
}, {
  dataField: 'deviceName',
  text: 'Product Name'
}];


const iconSize = '2em';
const buttonColumnWidth = 75;

const deleteDevice = (id)=>{
    alert("Deleting: "+id)
};

const constructButton =(icon, runnable)=>{
    return (<div style={{
    color: 'grey',
    display: 'inline-block',
    paddingLeft: '20px'

    }}>{icon}</div>);
};


const editDeviceFormat = (cell, row)=>{
                             console.log(cell);
                             console.log(row);

                             return (row.deviceType=="HOST")? constructButton(<VscSettingsGear size={iconSize}/>, ()=>{}) : '';
                         };
const outputDataFormat = (cell, row)=>{
         return (row.outputDataType==null)?("Not set") : row.outputDataType;
};
const installFirmwareFormat = (cell, row)=>{
                             console.log(cell);
                             console.log(row);
                             return (row.deviceType=="HOST")?constructButton(<RiInstallLine size={iconSize}/>, ()=>{}) : '';
                         };
const deleteDeviceFormat = (cell, row)=>{

                            return (constructButton(<VscTrash size={iconSize}/>, ()=>{}));
                         };
const downloadFirmwareFormat = (cell, row)=>{
                             console.log(cell);
                             console.log(row);
                             return (row.deviceType=="HOST")?(constructButton(<VscCloudDownload size={iconSize}/>, ()=>{})): '';
                         };
const eventsLog = (cell, row)=>{
                             console.log(cell);
                             console.log(row);
                             return (constructButton(<VscListSelection size={iconSize}/>, ()=>{}));
                         };
const deviceTypeFormat = (cell, row)=>{
                             console.log(cell);
                             console.log(row);
                             return <div>
                              <FontAwesomeIcon icon={DeviceConfig.GetIcon(row.deviceType)}/>
                             {"     "+row.deviceType}

                             </div>;
                             }
const deviceIDFormat = (cell, row)=>{
                              return ".."+cell.slice(Math.max(cell.length - 10, 1));
                              };
const compileButtons=(cell, row)=>{

    return (<div >
    {installFirmwareFormat(cell,row)}{downloadFirmwareFormat(cell,row)}
    {editDeviceFormat(cell, row)}{eventsLog(cell, row)}
    {deleteDeviceFormat(cell, row)}</div>);
};

class HostDevicesTable  extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                    hosts:null
                };

            }

       fetchData= () =>{
               fetch('/devices')
                   .then(response => response.json())
                   .then(json => this.setState({hosts: json}));
           }

           componentDidMount(){
               this.fetchData();
               this.timer = setInterval(this.fetchData, 5000);
           }
           componentWillUnmount() {
               clearInterval(this.timer)
           }



       render(){

        return(
        <div style={{
        backgroundColor: '#22273E',
        padding: 30,
        marginTop: 15,
        color: 'white',
        borderColor: 'blue'
        }} className="tableT">

             <BootstrapTable

                      ref='table'
                      data={ this.state.hosts }
                      pagination={ true }
                      search={ true }>

                      <TableHeaderColumn width={150} dataField='id' dataFormat={deviceIDFormat} isKey={ true }>Device ID</TableHeaderColumn>
                      <TableHeaderColumn dataField='deviceName' dataSort={true} >Device Name</TableHeaderColumn>
                      <TableHeaderColumn  width={150} dataField='deviceType' dataFormat={deviceTypeFormat} dataSort={true} >Device Type</TableHeaderColumn>
                      <TableHeaderColumn dataField='outputDataType' dataFormat={outputDataFormat} dataSort={true} >Output Data</TableHeaderColumn>

                      <TableHeaderColumn dataField='id' width={300} dataFormat={compileButtons}/>



                    </BootstrapTable>
                    </div>
        );

       }
}
 export default HostDevicesTable;