import React from 'react';
import WidgetPage from './pages/WidgetPage'


import {Route, Switch} from "react-router-dom";

const Main = () => {
    return (
        <main>
                <Switch>
                    <Route exact path="/" ><WidgetPage/></Route>
                    <Route path="/projects"><h1>hello</h1></Route>
                </Switch>
        </main>
    );
};

export default Main;