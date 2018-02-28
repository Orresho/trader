import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutContainer from '../containers/AboutContainer';
import BasePage from '../containers/BasePage'
import ItemsContainer from '../containers/ItemsContainer'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={BasePage} exact={true}/>
                <Route path="/about" component={AboutContainer} exact={true}/>
                <Route path="/sell" component={ItemsContainer} exact={true}/>
                <Route path="/buy" />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;