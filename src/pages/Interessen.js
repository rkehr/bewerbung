import React from 'react';
import PropTypes from 'prop-types';
import { Page, ImageSection, Slider } from '../components';
import { images } from '../data';

const Interessen = ({ page }) => {
  return (
    <Page page={page} header={false}>
      <Slider>
        <ImageSection image={images.PhotographyCat} imagePosition='right'>
          <h2>Fotografie</h2>
        </ImageSection>
        <ImageSection image={images.latteArtSnail}>
          <h2>Kaffee</h2>
          <p>
            Eine meiner großen Leidenschaften neben der Programmierung ist seid
            einigen Jahren Kaffee geworden. Nachdem ich inzwischen gut 3 Jahre
            in Cafés arbeitete begann begann die schwarze Flüssigkeit auch immer
            weiter in mein Privatleben zu sickern...
          </p>
        </ImageSection>
        <ImageSection image={images.latteArtSwans} imagePosition='right'>
          <h2>Latte Art</h2>
          <p>
            ...verschiedene Latteart-Muster immer besser hinzubekommen, hat
            einfach etwas sehr befriedigendes
          </p>
        </ImageSection>
      </Slider>
    </Page>
  );
};

Interessen.propTypes = {
  page: PropTypes.object,
};

export default Interessen;
