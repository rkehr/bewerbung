import React from 'react';
import PropTypes from 'prop-types';
import { ImageSection, Slider, ImageFrame } from '../components';
import { images } from '../data';

const Interessen = () => {
  return (
    <>
      <Slider>
        <ImageSection image={images.photographyCat} imagePosition='right'>
          <h2>Fotografie</h2>
        </ImageSection>
        <ImageFrame image={images.photographyFood}></ImageFrame>
        <ImageSection
          image={images.photographyWorkshop}
          imagePosition='right'></ImageSection>
        <ImageSection image={images.photographyAnalogKaefer}>
          <p>...und auch analoge Fotografie macht mir sehr viel Spaß</p>
        </ImageSection>
        <ImageFrame image={images.photographyAnalogSummer}></ImageFrame>
        <ImageFrame image={images.photographyAnalogLake}></ImageFrame>
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
    </>
  );
};

Interessen.propTypes = {
  page: PropTypes.object,
};

export default Interessen;
