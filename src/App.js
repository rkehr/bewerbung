import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { AnimatePresence } from 'framer-motion';

import {
  Hallo,
  Lebenslauf,
  Technologien,
  Referenzen,
  AndereInteressen,
} from './pages';
import { ThemeSwitch, NavElement } from './components';
import { useGlobalStore } from './state';

const App = () => {
  const location = useLocation();
  const theme = useGlobalStore(state => state.theme);
  return (
    <div className='app'>
      <div className='bg' style={theme.backgroundColorBackground} />
      <ThemeSwitch />
      <nav>
        <NavElement to='/hello'>
          🙋
          <br />
          <span className='navText'>Hallo</span>
        </NavElement>
        <NavElement to='/lebenslauf'>
          📰
          <br />
          <span className='navText'>Lebenslauf</span>
        </NavElement>
        <NavElement to='/technologien'>
          🎛
          <br />
          <span className='navText'>Technologien</span>
        </NavElement>
        <NavElement to='/referenzen'>
          🔖
          <br />
          <span className='navText'>Referenzen</span>
        </NavElement>
        <NavElement to='/andere-interessen'>
          📷
          <br />
          <span className='navText'>Andere Interessen</span>
        </NavElement>
      </nav>
      <AnimatePresence>
        <Switch location={location} key={location.key}>
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
    </div>
  );
};

export default hot(module)(App);
