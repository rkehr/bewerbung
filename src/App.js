import React, { useState } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { pages } from './data';
import { Moin, Lebenslauf, Skills, /*Referenzen,*/ Interessen } from './pages';
import { ThemeSwitch, NavElement, Page } from './components';
import { useGlobalStore, useThemeStore } from './state';

const App = () => {
  const { moin, lebenslauf, skills, interessen } = pages;
  const backgroundColorBackground = useThemeStore(
    (state) => state.theme.backgroundColorBackground
  );
  const location = useLocation();
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
            <Page page={moin}>
              <Moin page={moin} />
            </Page>
          </Route>
          <Route path={lebenslauf.to}>
            <Page page={lebenslauf}>
              <Lebenslauf page={lebenslauf} />
            </Page>
          </Route>
          <Route path={skills.to}>
            <Page page={skills}>
              <Skills page={skills} />
            </Page>
          </Route>
          <Route path={interessen.to}>
            <Page page={interessen}>
              <Interessen page={interessen} />
            </Page>
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
