import React from 'react';
import ReactDOM from '@hot-loader/react-dom';
import {
    Switch,
    Route,
    NavLink,
    useLocation} from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { AnimatePresence } from 'framer-motion';


import  {
    Hallo,
    Lebenslauf,
    Technologien,
    Referenzen,
    AndereInteressen }  from './pages';
import { SkillLevelData, TimeLineData } from './data'



const App = () => {
    const location = useLocation();
    return(<>
        <nav>
                    <NavLink to="/hallo" activeClassName="activeLink">🙋<br/> Hallo</NavLink>
                    <NavLink to="/lebenslauf" activeClassName="activeLink">📰<br/>Lebenslauf</NavLink>
                    <NavLink to="/technologien" activeClassName="activeLink">🎛<br/>Technologien</NavLink>
                    <NavLink to="referenzen" activeClassName="activeLink">🔖<br/>Referenzen</NavLink>
                    <NavLink to="andere-interessen" activeClassName="activeLink">📷<br/>Andere Interessen</NavLink>
        </nav>
        <AnimatePresence>
            <Switch location={location} key={location.key}>
                <Route path="/lebenslauf">
                    <Lebenslauf timeLineData={ TimeLineData }/>
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
                <Route path="/">
                    <Hallo/>
                </Route>
            </Switch>
        </AnimatePresence>
    </>)
}

export default hot(module)(App)