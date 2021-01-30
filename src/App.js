import React, { useState } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { pages } from './data';
import { Moin, Lebenslauf, Skills, /*Referenzen,*/ Interessen } from './pages';
import { ThemeSwitch, NavElement, Page, SkillGroupFilter } from './components';
import { useGlobalStore, useTheme, useDataStore } from './state';

const App = () => {
  const { moin, lebenslauf, skills, interessen } = pages;

  const themedBackground = useTheme({
    backgroundColor: 'background',
  });
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

  const skillLevels = useDataStore((state) => state.skillLevels);

  const categories = skillLevels.reduce((acc, group) => {
    if (!acc.includes(group.category)) {
      acc.push(group.category);
    }
    return acc;
  }, []);
  const [categoryFilters, setCategoryFilters] = useGlobalStore((state) => [
    state.categoryFilters,
    state.setCategoryFilters,
  ]);

  return (
    <div className='app'>
      <div className='bg' style={themedBackground} />

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
            <SkillGroupFilter
              categories={categories}
              activeCategories={categoryFilters}
              setCategoryFilters={setCategoryFilters}
            />
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
