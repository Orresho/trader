import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutContainer from '../containers/AboutContainer';
import BasePage from '../containers/BasePage'
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={BasePage} exact={true}/>
                <Route path="/about" component={AboutContainer} exact={true}/>
                <Route path="/sell" />
                <Route path="/buy" />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;