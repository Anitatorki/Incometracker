// Router.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import IncomeForm from './components/IncomeForm';

function MainRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/income" component={IncomeForm} />
            </Switch>
        </Router>
    );
}

export default MainRouter;
