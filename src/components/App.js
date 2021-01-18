import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import About from './streams/About'
import Shop from './streams/Shop'
import FAQ from './streams/FAQ'
import HomePage from './streams/HomePage'
import Community from './streams/Community'
import Header from './Header'
import history from '../history';



const App = () => {
    return (
        <div className='ui container'>
            <Router history={history}>
            <div>
                <Header />
                <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/about' exact component={About} />
                <Route path="/shop" exact component={Shop} />
                <Route path='/FAQ' exact component={FAQ} />
                <Route path='/Community' exact component={Community} />
                </Switch>
            </div>
            </Router>
        </div>
    )
};

export default App;