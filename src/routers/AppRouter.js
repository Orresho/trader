import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutContainer from '../containers/AboutContainer';
import HomeContainer from '../containers/HomeContainer';
import TradingPostContainer from '../containers/TradingPostContainer';
import BuyContainer from '../containers/BuyContainer';
import SellContainer from '../containers/SellContainer';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={HomeContainer} exact={true} />
                <Route path="/about" component={AboutContainer} exact={true} />
                <Route path="/tradingpost" component={TradingPostContainer} exact={true} />
                <Route path="/tradingpost/buy" component={BuyContainer} />
                <Route path="/tradingpost/sell" component={SellContainer} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;