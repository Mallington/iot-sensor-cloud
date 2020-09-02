import React from 'react';
import WidgetPage from './pages/WidgetPage'


import {Route, Switch} from "react-router-dom";
import ProjectsPage from "./pages/ProjectsPage";

const Main = () => {
    return (

        <main>

                <Switch>
                    <Route exact path="/" ><WidgetPage/></Route>
                    <Route path="/projects"><ProjectsPage/></Route>
                </Switch>
        </main>
    );
};

export default Main;