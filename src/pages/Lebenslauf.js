import React from 'react';
import PropTypes from 'prop-types';
import { eachYearOfInterval } from 'date-fns';
import { Calender, CalenderYear, Occupation } from '../components';
import { useDataStore, useThemeStore } from '../state';
import { intervalUnion } from '../functions';

const Lebenslauf = ({ page }) => {
  let [colorAccent, borderColorAccent] = useThemeStore((state) => [
    state.theme.colorAccent,
    state.theme.borderColorAccent,
  ]);

  const occupationTimeLine = useDataStore((state) => state.occupationTimeLine);

  const occupationInterval = intervalUnion(
    occupationTimeLine.map((occupation) => occupation.interval)
  );

  const relevantYears = eachYearOfInterval(occupationInterval).reverse();
  return (
    <>
      <h1 style={{ ...colorAccent, ...borderColorAccent }}>{page.name}</h1>
      <div className='gridContainer'>
        <div className='occupationDisplays' style={{}}>
          {occupationTimeLine.map((occupation, index) => {
            return (
              <Occupation
                occupation={occupation}
                index={index}
                key={index}></Occupation>
            );
          })}
        </div>
        <Calender>
          {relevantYears.map((year, index) => {
            return <CalenderYear date={year} key={index} index={index} />;
          })}
        </Calender>
      </div>
    </>
  );
};

Lebenslauf.propTypes = {
  page: PropTypes.object,
};

export default Lebenslauf;
