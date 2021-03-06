import React from 'react';
import WidgetPage from './pages/WidgetPage'


import {Route, Switch} from "react-router-dom";
import ProjectsPage from "./pages/ProjectsPage";
import DevicesPage from "./pages/DevicesPage";
import DeviceSettingsPage from "./pages/DeviceSettingsPage";
import UploadPage from "./pages/UploadPage";

const Main = () => {
    return (

        <main>

                <Switch>
                    <Route exact path="/" ><WidgetPage/></Route>
                    <Route path="/projects"><ProjectsPage/></Route>
                    <Route path="/devices/"><DevicesPage/></Route>
                    <Route path="/device-settings"><DeviceSettingsPage/></Route>
                    <Route path="/upload"><UploadPage/></Route>
                </Switch>
        </main>
    );
};

export default Main;