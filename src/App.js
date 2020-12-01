import React, { Component } from 'react';
import Map from "./components/map.js";
import CountryPost from "./components/countryPost.jsx";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <HashRouter>
            <div >
            <Switch>
                <Route exact path='/' component={Map} />
                <Route path='/moreInfo/:alpha2Code' component={ CountryPost } />
                    
            </Switch>
                   
            </div>
            </HashRouter>
        );
    }
}

export default App;