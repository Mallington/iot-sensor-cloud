import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import ReactApexChart  from 'react-apexcharts'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import DeviceConfig from "../../configs/DeviceConfig";

class WaterDepthSensorWidget extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deviceID: props.deviceID,
            barChartOptions : {
                colors: ['#f1f1f1', '#66DA26', '#5c7a54', '#E91E63', '#FF9800'],
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
            }, {
                    data: []
                },
            ],
            };
        }


    fetchData= () =>{
        fetch('/events/latest?deviceId='+this.state.deviceID)
            .then(response => response.json())
            .then(data => {

                this.setState({
                    series: [{
                        data: [data.aX,data.aY,data.aZ]
                    }, {
                        data: [data.gX,data.gY,data.gZ]
                    },
                    ],
                    }
                );
            });


    }

    componentDidMount(){
        this.fetchData();
        this.timer = setInterval(this.fetchData, 500);
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
            <div className="line" style={mystyleBody} >
                <h2 style={mystyleBody}>IMU Sensor</h2>
                <ReactApexChart  options={this.state.barChartOptions} type="bar" series={this.state.series} width="400" height="500"/>

            </div>
        );
    }
}

export default WaterDepthSensorWidget;