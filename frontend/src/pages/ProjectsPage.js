import React from 'react'
import DevicesCardCollection from "../components/DevicesCardCollection";
export default class ProjectsPage extends React.Component {
    render() {
        return (

            <div>
                <DevicesCardCollection projectTitle="Nano V3.0 | Application Demo"/>
                <DevicesCardCollection projectTitle="Cat Food and Water"/>
                <DevicesCardCollection projectTitle="Weather Station"/>
            </div>
        );
    }
}