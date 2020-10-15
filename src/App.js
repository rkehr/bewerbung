import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from 'react-router-dom';
import  { Hallo, Lebenslauf, Technologien, Referenzen, AndereInteressen }  from './pages';
import { SkillLevelData } from './data'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { hot } from 'react-hot-loader';

library.add(faCoffee)

class App extends React.Component {
    state = {

    }

    render(){
        const {count} = this.state
        return(
        <Router>
            <div>
                <nav>
                    
                            <NavLink to="/hallo" activeClassName="activeLink">🙋<br/> Hallo</NavLink>
                            <NavLink to="/lebenslauf" activeClassName="activeLink">📰<br/>Lebenslauf</NavLink>
                            <NavLink to="/technologien" activeClassName="activeLink">🎛<br/>Technologien</NavLink>
                            <NavLink to="referenzen" activeClassName="activeLink">🔖<br/>Referenzen</NavLink>
                            <NavLink to="andere-interessen" activeClassName="activeLink">📷<br/>Andere Interessen</NavLink>
                </nav>
                <Switch>
                    <Route path="/lebenslauf">
                        <Lebenslauf/>
                    </Route>
                    <Route path="/technologien">
                        <Technologien skillLevelData={ SkillLevelData }/>
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