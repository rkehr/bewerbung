import React from 'react';
import PropTypes from 'prop-types';
import { useGlobalStore } from '../../state';

function SliderControls({ numberOfSlides, setSlide, changeSlide }) {
  const { backgroundColorPrimary, borderColorAccent } = useGlobalStore(
    (state) => {
      return {
        backgroundColorPrimary: state.theme.backgroundColorPrimary,
        borderColorAccent: state.theme.borderColorAccent,
      };
    }
  );

  const getSlideDots = (numberOfSlides) => {
    const slideDots = [...Array(numberOfSlides).keys()];
    return slideDots.map((n) => {
      return (
        <div
          className='slideDot'
          key={n}
          onClick={() => {
            setSlide({ nr: n, up: true });
          }}
          style={backgroundColorPrimary}></div>
      );
    });
  };
  return (
    <div className='sliderControls'>
      <div
        className='forwardArrow'
        onClick={() => {
          changeSlide(1);
        }}
        style={backgroundColorPrimary}>
        <div style={borderColorAccent}></div>
      </div>
      {getSlideDots(numberOfSlides)}
      <div
        className='backArrow'
        onClick={() => {
          changeSlide(-1);
        }}
        style={backgroundColorPrimary}>
        <div style={borderColorAccent}></div>
      </div>
    </div>
  );
}

SliderControls.propTypes = {
  setSlide: PropTypes.func,
  changeSlide: PropTypes.func,
  numberOfSlides: PropTypes.number,
};

export default SliderControls;
