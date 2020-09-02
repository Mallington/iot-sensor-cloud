import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import ReactApexChart  from 'react-apexcharts'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import DeviceConfig from "../../configs/DeviceConfig";

class WaterDepthSensorWidget extends Component {

    constructor(props) {
        super(props);
        this.lastID = -1;
        this.startBuffer=50;
        this.maxLength=200;
        this.currLength=0
        this.latestID=0;

        this.state = {
            deviceID: props.deviceID,
            lineChartOptions: {
                chart: {
                    id: 'realtime',
                    height: 350,
                    type: 'line',
                    animations: {
                        enabled: true,
                        easing: 'linear',
                        dynamicAnimation: {
                            speed: 1000
                        }
                    },
                    toolbar: {
                        show: false
                    },
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },

                colors: ['#f1f1f1', '#66DA26', '#5c7a54', '#E91E63', '#FF9800'],
                stroke: {
                    thickness: 1,
                    curve: 'smooth'
                },
                markers: {
                    size: 0
                },
                xaxis: {
                    type: 'datetime',
                    categories: []
                },
                yaxis: {
                    max: 300
                },
                legend: {
                    show: false
                },
            },
            lineChartSeries: [{
                data: []
            }],
            barChartOptions : {
                colors: ['#fbedc5', '#66DA26', '#5c7a54', '#E91E63', '#FF9800'],
                chart: {
                    type: 'bar',
                    height: 20
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        dataLabels: {
                            position: 'top',
                        },
                    }
                },
                dataLabels: {
                    enabled: true,
                    offsetX: -6,
                    style: {
                        fontSize: '12px',
                        colors: ['#fff']
                    }
                },
                stroke: {
                    show: true,
                    width: 1,
                    colors: ['#fff']
                },
                xaxis: {
                    categories: ["Level"],
                    max:300
                },
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                },
            },
            series: [{
                data: []
            }],
            };
        }


    fetchData= () =>{
        //console.log(this.currLength);
        //console.log()
        if(this.currLength>=this.maxLength) {
            this.lastID = this.latestID-this.startBuffer;
            //console.log("Resizing");
        }
        fetch('/events/filter?deviceId='+this.state.deviceID+"&idStart="+0+"&amount="+this.maxLength)
            .then(response => response.json())
            .then(data => {
                this.currLength = data.length;
                if(data.length>0) {
                    this.latestID = data.pop().id;
                    this.setState({
                            lineChartOptions: {
                                xaxis: {
                                    categories: data.map((data) => data.time)
                                }
                            },
                            lineChartSeries: [{
                                data: data.map((data) => data.depth)
                            }],
                            series: [{
                                data: [data.pop().depth]
                            }]
                        }
                    );
                    //console.log(this.state.series)
                }
            });


    }

    componentDidMount(){
        fetch('/events/latest')
            .then(response => response.json())
            .then(data => {
                console.log("Hello1");
                console.log(data);
                console.log(data.id);
                this.lastID = data.id-this.startBuffer;
                this.fetchData();
                this.timer = setInterval(this.fetchData, 500);
            })
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        const mystyleBody = {
            color: "white",
            backgroundColor: "#000000",
            width: 400,
            fontFamily: "Roboto",
            outline: "2px solid white",

        };
        return (
            <ReactApexChart  options={this.state.barChartOptions} type="bar" series={this.state.series}/>
            // <h1>hello</h1>
            // <div className="line" style={mystyleBody} >
            //     <h2 style={mystyleBody}>Water Sensor</h2>
            //     <Chart options={this.state.lineChartOptions} series={this.state.lineChartSeries} type="line" width="400"  height={"200"}/>
            //     <ReactApexChart  options={this.state.barChartOptions} type="bar" series={this.state.series} width="400" height="100"/>
            //
            // </div>
        );
    }
}

export default WaterDepthSensorWidget;