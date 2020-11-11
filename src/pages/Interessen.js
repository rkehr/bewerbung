import React from 'react';
import PropTypes from 'prop-types';
import { Page, ImageSection } from '../components';
import { images } from '../data';

const Interessen = ({ page }) => {
  return (
    <Page page={page} header={true}>
      <ImageSection image={images.latteArtSnail}>
        <h3>Kaffee!</h3>
        <p>
          Eine meiner großen Leidenschaften neben der Programmierung ist seid
          einigen Jahren Kaffee geworden. Nachdem ich inzwischen gut 3 Jahre in
          Cafés arbeitete...
        </p>
      </ImageSection>
      <ImageSection image={images.latteArtSwans} imagePosition='right'>
        <h3>Und Schwäne undso</h3>
      </ImageSection>
    </Page>
  );
};

Interessen.propTypes = {
  page: PropTypes.object,
};

export default Interessen;
