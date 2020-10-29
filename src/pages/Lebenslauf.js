import React from 'react';
import PropTypes from 'prop-types';
import { eachYearOfInterval } from 'date-fns';
import { Page, Calender, CalenderYear, Occupation } from '../components';
import { useGlobalStore } from '../state';
import { intervalUnion } from '../functions';

const Lebenslauf = ({ page }) => {
  const occupationTimeLine = useGlobalStore(state => state.occupationTimeLine);

  const occupationInterval = intervalUnion(
    occupationTimeLine.map(occupation => occupation.interval)
  );

  const relevantYears = eachYearOfInterval(occupationInterval).reverse();
  return (
    <Page page={page} header={true}>
      <div className='gridContainer'>
        <Calender>
          {relevantYears.map((year, index) => {
            return <CalenderYear date={year} key={index} />;
          })}
        </Calender>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}>
          {occupationTimeLine.map((occupation, index) => {
            return (
              <Occupation
                occupation={occupation}
                index={index}
                key={index}></Occupation>
            );
          })}
        </div>
      </div>
    </Page>
  );
};

Lebenslauf.propTypes = {
  page: PropTypes.object,
};

export default Lebenslauf;
