import React from 'react';
import ReactDom from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from 'react-router-dom';
import  { Hallo, Lebenslauf, Technologien, Referenzen, AndereInteressen }  from './pages';

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
                    
                            <NavLink to="/hallo" activeClassName="activeLink">Hallo!</NavLink>
                            <NavLink to="/lebenslauf" activeClassName="activeLink">Lebenslauf</NavLink>
                            <NavLink to="/technologien" activeClassName="activeLink">Technologien</NavLink>
                            <NavLink to="referenzen" activeClassName="activeLink">Referenzen</NavLink>
                            <NavLink to="andere-interessen" activeClassName="activeLink">Andere Interessen</NavLink>
                </nav>
                <Switch>
                    <Route path="/lebenslauf">
                        <Lebenslauf/>
                    </Route>
                    <Route path="/technologien">
                        <Technologien/>
                    </Route>
                    <Route path="/referenzen">
                        <Referenzen/>
                    </Route>
                    <Route path="/andere-interessen">
                        <AndereInteressen/>
                    </Route>
                    <Route path="/hallo">
                        <Hallo/>
                    </Route>
                </Switch>
            </div>
        </Router>
        )
    }
}

export default hot(module)(App)