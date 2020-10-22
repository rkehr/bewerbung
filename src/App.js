import React from 'react';
import { Switch, Route, NavLink, useLocation } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { AnimatePresence } from 'framer-motion';

import {
  Hallo,
  Lebenslauf,
  Technologien,
  Referenzen,
  AndereInteressen,
} from './pages';
import { ThemeSwitch } from './components';
import { useGlobalStore } from './state';

const App = () => {
  const location = useLocation();
  const theme = useGlobalStore((state) => state.theme);
  return (
    <>
      <ThemeSwitch></ThemeSwitch>
      <nav>
        <NavLink to='/hello' activeClassName='activeLink'>
          🙋
          <br />
          <span className='navText'>Hallo</span>
        </NavLink>
        <NavLink to='/lebenslauf' activeClassName='activeLink'>
          📰
          <br />
          <span className='navText'>
            Lebenslauf
          </span>
        </NavLink>
        <NavLink to='/technologien' activeClassName='activeLink'>
          🎛
          <br />
          <span className='navText'>
            Technologien
          </span>
        </NavLink>
        <NavLink to='referenzen' activeClassName='activeLink'>
          🔖
          <br />
          <span className='navText'>
            Referenzen
          </span>
        </NavLink>
        <NavLink to='andere-interessen' activeClassName='activeLink'>
          📷
          <br />
          <span className='navText'>
            Andere Interessen
          </span>
        </NavLink>
      </nav>
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          {console.log(location)}
          <Route path='/lebenslauf'>
            <Lebenslauf />
          </Route>
          <Route path='/technologien'>
            <Technologien />
          </Route>
          <Route path='/referenzen'>
            <Referenzen />
          </Route>
          <Route path='/andere-interessen'>
            <AndereInteressen />
          </Route>
          <Route path='/hello'>
            <Hallo />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default hot(module)(App);
