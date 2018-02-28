import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutContainer from '../containers/AboutContainer';
import ItemsContainer from '../containers/ItemsContainer';
import HomeContainer from '../containers/HomeContainer';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomeContainer} exact={true} />
                <Route path="/about" component={AboutContainer} exact={true} />
                <Route path="/sell" component={ItemsContainer} exact={true} />
                <Route path="/buy" />
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
)

export default AppRouter;