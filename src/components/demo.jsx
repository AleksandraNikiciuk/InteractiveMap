import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return <div>
            <h1>App</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>;
    }
}
class Main extends React.Component {
    render() {
        return <h1>Hello, World!
            <Link to="/contact">Go to contact</Link>
        </h1>;
    }
}
class Contact extends React.Component {
    render() {
        return <h1>Contact us at contact@example.com
            <Link to="/">Home</Link>
        </h1>;
    }
}

class NotFound extends React.Component {
    render() {
        return <h1>404,Nothing is here
            <Link to="/">Home</Link>
        </h1>;
    }
}

class App2 extends React.Component {
    render() {
        return <HashRouter>
            <div>
                {/* <Navigation /> */}
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route path='/contact' component={Contact} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </HashRouter>;
    }
}

// document.addEventListener('DOMContentLoaded', function(){
//     ReactDOM.render(
//         <App />,
//         document.getElementById('app')
//     );
// });

export default App2;