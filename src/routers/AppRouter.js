import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/header/header';
import ItemListComponent from '../components/tradingPost/itemListComponent';
import AboutContainer from '../containers/aboutPage/aboutContainer';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/home" component={ItemListComponent} exact={true} />
                <Route path="/about" component={ItemListComponent} />
                <Route path="/items" component={ItemListComponent} />
                
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;