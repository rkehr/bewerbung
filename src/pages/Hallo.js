import React from 'react';
import { Page } from '../components';
import { useGlobalStore } from '../state';

const Hallo = ({ page }) => {
  return (
    <Page page={page}>
      <p> Ich bin ein Text </p>
    </Page>
  );
};

export default Hallo;
