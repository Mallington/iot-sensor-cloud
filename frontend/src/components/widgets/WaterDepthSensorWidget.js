import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class WaterDepthSensorWidget extends Component {

    constructor(props) {
        super(props);
        this.exampleData =
        [{
            id: 11630,
            time: "2020-08-26T19:27:32.550+00:00",
            deviceId: "8abb809773fedb7d0173fedb8ba60000",
            depth: 4
        },
        {
            id: 11631,
            time: "2020-08-26T19:27:34.358+00:00",
            deviceId: "8abb809773fedb7d0173fedb8ba60000",
            depth: 3
        },
        {
            id: 11632,
            time: "2020-08-26T19:27:35.383+00:00",
            deviceId: "8abb809773fedb7d0173fedb8ba60000",
            depth: 4
        }]

        this.state = {
            deviceID: props.deviceID,
            options: {
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

                colors: ['#ffffff', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
                stroke: {
                    thickness: 4,
                    curve: 'smooth'
                },
                markers: {
                    size: 0
                },
                xaxis: {
                    categories: this.exampleData.map((data)=>data.time)
                }
            },
            series: [{
                data: this.exampleData.map((data)=>data.depth)
            }],
        }
        console.log(this.state.deviceID);
    }

    fetchData= () =>{
        fetch('/events?deviceId='+this.state.deviceID)
            .then(response => response.json())
            .then(data => this.setState({options: {
                    xaxis: {
                        categories: data.map((data)=>data.time).slice(Math.max(data.length - 10, 0))
                    }
                },
                series: [{
                    data: data.map((data)=>data.depth).slice(Math.max(data.length - 10, 0))
                        }]
                }

                ));
    }

    componentDidMount(){
        this.fetchData();
        this.timer = setInterval(this.fetchData, 500);
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }

    strip(attribute){
        var data = [];
        for(var a in this.exampleData){
            data.push(a[attribute]);
        }
        return data;
    }

    render() {

        return (
            <div className="line">
                <Chart options={this.state.options} series={this.state.series} type="line" width="500"  />
            </div>
        );
    }
}

export default WaterDepthSensorWidget;