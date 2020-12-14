import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { pages } from './data';
import { Moin, Lebenslauf, Skills, /*Referenzen,*/ Interessen } from './pages';
import { ThemeSwitch, NavElement } from './components';
import { useGlobalStore, useThemeStore } from './state';

const App = () => {
  const { moin, lebenslauf, skills, interessen } = pages;
  const backgroundColorBackground = useThemeStore(
    (state) => state.theme.backgroundColorBackground
  );
  const location = useLocation();
  const pageElements = [Moin, Lebenslauf, Skills, /*Referenzen,*/ Interessen];
  const [pageIndex, setPageIndex] = useState(0);
  const [previousPageIndex, setPreviousPageIndex] = useState(0);
  const [pageDirection, setPageDirection] = useGlobalStore((state) => [
    state.pageDirection,
    state.setPageDirection,
  ]);

  const updatePageDirection = (newPageIndex) => {
    setPreviousPageIndex(pageIndex);
    setPageIndex(newPageIndex);
    if (previousPageIndex == pageIndex) {
      setPageDirection(0);
    } else {
      setPageDirection(previousPageIndex > pageIndex ? 1 : -1);
    }
  };

  return (
    <div className='app'>
      <div className='bg' style={backgroundColorBackground} />

      <AnimatePresence custom={pageDirection}>
        <Switch location={location} key={location.key}>
          <Route path={moin.to}>
            <Moin page={moin}></Moin>
          </Route>
          <Route path={lebenslauf.to}>
            <Lebenslauf page={lebenslauf}></Lebenslauf>
          </Route>
          <Route path={skills.to}>
            <Skills page={skills}></Skills>
          </Route>
          <Route path={interessen.to}>
            <Interessen page={interessen}></Interessen>
          </Route>

          <Redirect to='/moin' />
        </Switch>
      </AnimatePresence>
      <nav>
        <NavElement page={moin} updatePageDirection={updatePageDirection} />
        <NavElement
          page={lebenslauf}
          updatePageDirection={updatePageDirection}
        />
        <NavElement page={skills} updatePageDirection={updatePageDirection} />
        <NavElement
          page={interessen}
          updatePageDirection={updatePageDirection}
        />
      </nav>

      <ThemeSwitch />
    </div>
  );
};

export default App;
