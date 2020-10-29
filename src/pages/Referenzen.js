import React from 'react';
import PropTypes from 'prop-types';
import { Page } from '../components';

const Referenzen = ({ page }) => {
  return <Page page={page} header={true}></Page>;
};

Referenzen.propTypes = {
  page: PropTypes.object,
};

export default Referenzen;
