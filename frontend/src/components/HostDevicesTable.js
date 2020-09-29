import React from 'react'
import Button from 'react-bootstrap/Button'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import DeviceConfig from '../configs/DeviceConfig'
import '../styles/react-table.css'


import { RiInstallLine } from 'react-icons/ri';
import { VscListSelection,VscCloudDownload, VscTrash, VscSettingsGear } from "react-icons/vsc";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import DeviceEventLog from '../components/device-properties/DeviceEventLog.js'

const columns = [{
  dataField: 'id',
  text: 'Device ID'
}, {
  dataField: 'deviceName',
  text: 'Product Name'
}];


const iconSize = '2em';
const buttonColumnWidth = 75;



class HostDevicesTable  extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                    hosts:null
                };

                //Button actions
                this.deleteDevice = (id)=>{

                    fetch('/devices/'+id, {
                    			method: 'DELETE'
                    		}).then(()=> this.fetchData());


                };

                //Buttons
                this.constructButton =(icon, runnable)=>{
                    return (<div style={{
                    color: 'grey',
                    display: 'inline-block'


                    }}><Button onClick={runnable} style={{backgroundColor: 'transparent'}}variant="outline-light">{icon}</Button></div>);
                };

                this.editDeviceFormat = (cell, row)=>(row.deviceType=="HOST")? this.constructButton(<VscSettingsGear size={iconSize}/>, ()=>{}) : '';
                this.outputDataFormat = (cell, row)=>(row.outputDataType==null)?("Not set") : row.outputDataType;
                this.installFirmwareFormat = (cell, row)=>(row.deviceType=="HOST")?this.constructButton(<RiInstallLine size={iconSize}/>, ()=>{}) : '';
                this.deleteDeviceFormat = (cell, row)=>(this.constructButton(<VscTrash size={iconSize}/>, ()=>this.deleteDevice(row.id)));
                this.downloadFirmwareFormat = (cell, row)=> (row.deviceType=="HOST")?(this.constructButton(<VscCloudDownload size={iconSize}/>, ()=>{})): '';
                this.eventsLog = (cell, row)=>(this.constructButton(<VscListSelection size={iconSize}/>, ()=>{}));

                this.compileButtons=(cell, row)=>{
                    return (<div >
                    {this.installFirmwareFormat(cell,row)}{this.downloadFirmwareFormat(cell,row)}
                    {this.editDeviceFormat(cell, row)}{this.eventsLog(cell, row)}
                    {this.deleteDeviceFormat(cell, row)}</div>);
                };

                //Data Fields
                this.deviceTypeFormat = (cell, row)=><div><FontAwesomeIcon icon={DeviceConfig.GetIcon(row.deviceType)}/>{"     "+row.deviceType}</div>;
                this.deviceIDFormat = (cell, row)=>".."+cell.slice(Math.max(cell.length - 10, 1));

            }

       fetchData= () =>{
                console.log("Updating start");
               fetch('/devices')
                   .then(response => response.json())
                   .then(json => this.setState({hosts: json})).then(()=>console.log("Updated"));
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

            <DeviceEventLog/>

             <BootstrapTable

                      ref='table'
                      data={ this.state.hosts }
                      pagination={ true }
                      search={ true }>

                      <TableHeaderColumn width={150} dataField='id' dataFormat={this.deviceIDFormat} isKey={ true }>Device ID</TableHeaderColumn>
                      <TableHeaderColumn dataField='deviceName' dataSort={true} >Device Name</TableHeaderColumn>
                      <TableHeaderColumn  width={150} dataField='deviceType' dataFormat={this.deviceTypeFormat} dataSort={true} >Device Type</TableHeaderColumn>
                      <TableHeaderColumn dataField='outputDataType' dataFormat={this.outputDataFormat} dataSort={true} >Output Data</TableHeaderColumn>

                      <TableHeaderColumn dataField='id' width={300} dataFormat={this.compileButtons}/>



                    </BootstrapTable>
                    </div>
        );

       }
}
 export default HostDevicesTable;