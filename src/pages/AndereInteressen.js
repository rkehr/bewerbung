import React from 'react';
import PropTypes from 'prop-types';
import { Page } from '../components';

const AndereInteressen = ({ page }) => {
  return <Page page={page} header={true}></Page>;
};

AndereInteressen.propTypes = {
  page: PropTypes.object,
};

export default AndereInteressen;
