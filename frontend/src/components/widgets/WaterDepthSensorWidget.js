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
            depth: 3
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
            options: {
                colors: ['#ffffff', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
                stroke: {
                    curve: 'smooth'
                },
                markers: {
                    size: 0
                },
                xaxis: {
                    categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                }
            },
            series: [{
                data: [30, 40, 25, 50, 49, 21, 70, 20]
            }],
        }
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