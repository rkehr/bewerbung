import React from 'react';
import PropTypes from 'prop-types';
import { Page, ImageFrame } from '../components';
import { images } from '../data';

const Interessen = ({ page }) => {
  return (
    <Page page={page} header={true}>
      <ImageFrame image={images.latteArtSnail}></ImageFrame>
    </Page>
  );
};

Interessen.propTypes = {
  page: PropTypes.object,
};

export default Interessen;
