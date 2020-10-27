import React from 'react';
import { Page } from '../components';
import { useGlobalStore } from '../state';

const AndereInteressen = ({ page }) => {
  return <Page page={page} header={true}></Page>;
};

export default AndereInteressen;
