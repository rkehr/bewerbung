import React from 'react';
import ReactDom from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import { hot } from 'react-hot-loader';

class App extends React.Component {
    state = {
        
    }

    render(){
        const {count} = this.state
        return(
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Hallo!</Link>
                        </li>
                        <li>
                            <Link to="/lebenslauf">Lebenslauf</Link>
                        </li>
                        <li>
                            <Link to="referenzen">Referenzen</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </Router>
        )
    }
}

export default hot(module)(App)