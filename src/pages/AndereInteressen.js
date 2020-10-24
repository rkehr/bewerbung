import React from 'react';
import { Page } from '../components';
import { useGlobalStore } from '../state';

const AndereInteressen = () => {
  const { colorPrimary } = useGlobalStore(state => state.theme);
  return (
    <Page>
      <h1 style={colorPrimary}>Andere Interessen</h1>
    </Page>
  );
};

export default AndereInteressen;
