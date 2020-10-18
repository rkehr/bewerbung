import React from 'react';
import { Page, Calender } from '../components';

const Lebenslauf = ({ timeLineData }) => {
  return (
    <Page>
      <h1>Lebenslauf</h1>
      <div className='gridContainer'>
        <Calender timeLineData={timeLineData} />
      </div>
    </Page>
  );
};

export default Lebenslauf;
