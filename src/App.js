import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import VideoPlayPage from './components/VideoPlayPage';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} /> 
                <Route path="/video/:id" component={VideoPlayPage} />
            </Switch>
        </Router>
    );
};

export default App;
