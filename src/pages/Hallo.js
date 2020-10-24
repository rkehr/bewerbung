import React from 'react';
import { Page } from '../components';
import { useGlobalStore } from '../state';

const Hallo = () => {
  const { colorPrimary } = useGlobalStore(state => state.theme);
  return (
    <Page>
      <h1 style={colorPrimary}> Hallo!!</h1>
      <p style={colorPrimary}> Ich bin ein Text </p>
    </Page>
  );
};

export default Hallo;
