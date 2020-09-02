import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import ReactApexChart  from 'react-apexcharts'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import DeviceConfig from "../../configs/DeviceConfig";

class IMUSensorWidget extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deviceID: props.deviceID,
            barChartOptions : {
                colors: ['#f1f1f1', '#66DA26', '#5c7a54', '#E91E63', '#FF9800'],
                chart: {
                    type: 'bar',
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
            fontFamily: "Roboto",

            alignItems: 'center'

        };
        return (
            // <span><ReactApexChart  style={mystyleBody} options={this.state.barChartOptions} type="bar" series={this.state.series}/></span>
            <ReactApexChart  options={this.state.barChartOptions} type="bar" series={this.state.series}/>
            //<h2 >hello</h2>
            // <ReactApexChart  options={this.state.barChartOptions} type="bar" series={this.state.series}/>
        );
    }
}

export default IMUSensorWidget;