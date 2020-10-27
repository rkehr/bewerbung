import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
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
          <Redirect to='/moin' />
        </Switch>
      </AnimatePresence>
      <ThemeSwitch />
    </div>
  );
};

export default hot(module)(App);
