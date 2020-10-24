import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { AnimatePresence } from 'framer-motion';

import { pages } from './data';
import {
  Hallo,
  Lebenslauf,
  Technologien,
  Referenzen,
  AndereInteressen,
} from './pages';
import { ThemeSwitch, NavElement } from './components';
import { useGlobalStore } from './state';
import { cloneElement } from 'react';

const App = () => {
  const location = useLocation();
  const theme = useGlobalStore(state => state.theme);
  const pageElements = [
    Hallo,
    Lebenslauf,
    Technologien,
    Referenzen,
    AndereInteressen,
  ];
  return (
    <div className='app'>
      <div className='bg' style={theme.backgroundColorBackground} />
      <ThemeSwitch />
      <nav>
        {pages.map((page, index) => {
          return <NavElement page={page} key={index} />;
        })}
      </nav>
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          {pages.map((currentPage, index) => {
            return (
              <Route path={currentPage.to} key={index}>
                {React.createElement(pageElements[currentPage.position], {
                  page: currentPage,
                  testProp: 1,
                })}
              </Route>
            );
          })}
          {/*<Route path='/lebenslauf'>
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
        </Route>*/}
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default hot(module)(App);
