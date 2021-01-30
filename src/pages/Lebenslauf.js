import React from 'react';
import PropTypes from 'prop-types';
import { Calender, Occupation } from '../components';
import { useDataStore, useGlobalStore } from '../state';
import { useTheme } from '../state/themeState.ts';

const Lebenslauf = ({ page }) => {
  const themedHeader = useTheme({ color: 'accent', borderColor: 'accent' });

  const occupationTimeLine = useDataStore((state) => state.occupationTimeLine);

  const occupationControls = useGlobalStore(
    (state) => state.occupationControls
  );

  return (
    <>
      <h1 style={themedHeader}>{page.name}</h1>
      <div className='gridContainer'>
        <div className='occupationDisplays' style={{}}>
          {occupationTimeLine.map((occupation, index) => {
            return (
              <Occupation occupation={occupation} index={index} key={index} />
            );
          })}
        </div>
        <Calender
          timeLine={occupationTimeLine}
          occupationControls={occupationControls}
        />
      </div>
    </>
  );
};

Lebenslauf.propTypes = {
  page: PropTypes.object,
};

export default Lebenslauf;
