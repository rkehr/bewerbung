import React from 'react';
import { Page } from '../components';
import { useGlobalStore } from '../state';

const Referenzen = () => {
  const { colorPrimary } = useGlobalStore(state => state.theme);
  return (
    <Page>
      <h1 style={colorPrimary}> Referenzen </h1>
    </Page>
  );
};

export default Referenzen;
