import React, { Component } from 'react';
import VoltageImg from '../../images/voltage-meter.png'
import '../../styles/welcome-card.css'
import Button from 'react-bootstrap/Button'
import {Link} from "react-router-dom";
import {MenuItem} from "react-pro-sidebar";

class GettingStartedWidget extends Component {
    
    render() {
        return (
            <div className="card-element">
                <h1>Got something to measure?</h1>
                <img src={VoltageImg} width="200" height="200" alt="Soldering free icon" title="Soldering free icon"/>
                <h2>Go to the <Link to="/projects">projects page</Link> and add a new sensor.</h2>
            </div>

        );
    }
}

export default GettingStartedWidget;