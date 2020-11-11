import React from 'react';
import PropTypes from 'prop-types';

const Calender = ({ children }) => {
  return <div className='calender'>{children}</div>;
};

Calender.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default Calender;
