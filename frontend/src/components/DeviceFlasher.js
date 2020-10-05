import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";
import Lottie from 'react-lottie';
import * as usbOpen from '../animations/usb-open.json'
import {HEX} from '../misc/firmware_sample'
import Daemon from "arduino-create-agent-js-client";




const chromeExtensionID = 'hfejhkbipnickajaidoppbadcomekkde';
const daemon = new Daemon('https://builder.arduino.cc/v3/boards', chromeExtensionID);
export default class DeviceFlasher extends React.Component{



    constructor(props) {
        super(props);

        this.state = {
            error: '',
            agentStatus: false,
            channelStatus: false,
            serialDevices: [],
            networkDevices: [],
            agentInfo: '',
            serialMonitorContent: '',
            serialPortOpen: '',
            uploadStatus: '',
            uploadError: '',
            downloadStatus: '',
            downloadError: '',
            serialInput: '',
            supportedBoards: [],
            uploadingPort: ''
        };
    }

    handleUpload() {
        const target = {
            board: 'arduino:samd:nano_33_iot',
            port: '/dev/cu.usbmodem14131101',
            network: false
        };
        this.setState({ uploadingPort: target.port });
        daemon.boardPortAfterUpload.subscribe(portStatus => {
            if (portStatus.hasChanged) {
                this.setState({ uploadingPort: portStatus.newPort });
            }
        });

        // Upload a compiled sketch.
        daemon.uploadSerial(target, 'serial_mirror', { bin: HEX });
    }

    componentDidMount() {
        daemon.agentFound.subscribe(status => {
            this.setState({
                agentStatus: status,
                agentInfo: JSON.stringify(daemon.agentInfo, null, 2)
            });
        });

        daemon.channelOpen.subscribe(status => {
            this.setState({ channelStatus: status });
        });

        daemon.error.subscribe(this.showError);
        daemon.serialMonitorError.subscribe(this.showError);
        daemon.uploadingError.subscribe(this.showError);
        daemon.downloadingError.subscribe(this.showError);

        daemon.devicesList.subscribe(({ serial, network }) => this.setState({
            serialDevices: serial,
            networkDevices: network
        }));

        daemon.supportedBoards.subscribe(boards => this.setState({
            supportedBoards: boards
        }));

        const serialTextarea = document.getElementById('serial-textarea');

        daemon.serialMonitorMessages.subscribe(message => {
            this.setState({
                serialMonitorContent: this.state.serialMonitorContent + message
            });
        });

        daemon.uploading.subscribe(upload => {
            this.setState({ uploadStatus: upload.status, uploadError: upload.err });
        });

        if (daemon.downloading) {
            daemon.downloading.subscribe(download => {
                this.setState({ downloadStatus: download.status });
            });
        }
    }




    render() {
        const usbOpenAnimationOptions = {
            loop: true,
            autoplay: true,
            animationData: usbOpen.default,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };
        return(
            <div >
                {(this.state.serialDevices.length<=0)?(
                    <div>
                <Lottie
                    options={usbOpenAnimationOptions}
                    height={400}
                    width={400}
                />
                <h2 style ={{color:"white", margin:50}}>Plug in your board and select the com port</h2>
                    </div>):
                    (<div>
                        <h2 style={{color:"white"}}>Upload port: {this.state.uploadingPort} | Current status: {this.state.uploadStatus}</h2>

                        <h2 style={{color:'grey'}}>Debug:</h2>
                        <h2 style={{backgroundColor:'black', color: 'grey'}}>Agent Status: {JSON.stringify(this.state)}</h2>
                        <Button onClick={()=>this.handleUpload()}  style={{backgroundColor: 'transparent',borderColor:'white', width:'80%', marginLeft:'10%', marginRight:'10%', color: 'white' }}
                                variant="outline-light">Upload</Button>

                    </div>)
                

                }
            </div>
        );
    }
}