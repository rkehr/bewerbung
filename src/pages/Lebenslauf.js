import React from 'react';
import PropTypes from 'prop-types';
import { Calender, Occupation } from '../components';
import { useDataStore, useThemeStore } from '../state';

const Lebenslauf = ({ page }) => {
  let [colorAccent, borderColorAccent] = useThemeStore((state) => [
    state.theme.colorAccent,
    state.theme.borderColorAccent,
  ]);

  const occupationTimeLine = useDataStore((state) => state.occupationTimeLine);

  return (
    <>
      <h1 style={{ ...colorAccent, ...borderColorAccent }}>{page.name}</h1>
      <div className='gridContainer'>
        <div className='occupationDisplays' style={{}}>
          {occupationTimeLine.map((occupation, index) => {
            return (
              <Occupation occupation={occupation} index={index} key={index} />
            );
          })}
        </div>
        <Calender timeLine={occupationTimeLine} />
      </div>
    </>
  );
};

Lebenslauf.propTypes = {
  page: PropTypes.object,
};

export default Lebenslauf;
