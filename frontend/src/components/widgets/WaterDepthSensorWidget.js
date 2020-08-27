import React, { Component } from 'react';
import Chart from 'react-apexcharts'

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
            series: [{
                data: []
            }],
        };
    }

    fetchData= () =>{
        console.log(this.currLength);
        console.log()
        if(this.currLength>=this.maxLength) {
            this.lastID = this.latestID-this.startBuffer;
            console.log("Resizing");
        }
        fetch('/events/filter?deviceId='+this.state.deviceID+"&idStart="+this.lastID+"&amount="+this.maxLength)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.currLength = data.length;
                this.latestID = data.pop().id;
                this.setState({options: {
                            xaxis: {
                                categories: data.map((data)=>data.time)
                            }
                        },
                        series: [{
                            data: data.map((data)=>data.depth)
                        }]
                    }
                );
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