import React, { Component } from 'react';
import VoltageImg from '../../images/voltage-meter.png'
import '../../styles/welcome-card.css'
class GettingStartedWidget extends Component {
    
    render() {
        return (
            <div className="welcome-card">
                <h1>Want to measure something?</h1>
                <img src={VoltageImg} width="200" height="200" alt="Soldering free icon" title="Soldering free icon"/>
                <h2>Go to the projects page and add a new sensor.</h2>

            </div>

        );
    }
}

export default GettingStartedWidget;