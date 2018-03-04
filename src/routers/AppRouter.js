import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutContainer from '../containers/AboutContainer';
import ItemsContainer from '../containers/ItemsContainer';
import HomeContainer from '../containers/HomeContainer';
import BuyContainer from '../containers/BuyContainer';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={HomeContainer} exact={true} />
                <Route path="/about" component={AboutContainer} exact={true} />
                <Route path="/sell" component={ItemsContainer} exact={true} />
                <Route path="/buy" component={BuyContainer} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;