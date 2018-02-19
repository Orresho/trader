import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/header/header';
import ItemListComponent from '../components/tradingPostPage/itemListComponent'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/items" component={ItemListComponent} exact={true} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;