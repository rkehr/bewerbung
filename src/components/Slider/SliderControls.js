import React from 'react';
import PropTypes from 'prop-types';
import { useThemeStore } from '../../state';

function SliderControls({
  numberOfSlides,
  activeSlide,
  setSlide,
  changeSlide,
}) {
  const {
    backgroundColorPrimary,
    borderColorAccent,
    borderColorBackground,
  } = useThemeStore((state) => {
    return {
      backgroundColorPrimary: state.theme.backgroundColorPrimary,
      borderColorAccent: state.theme.borderColorAccent,
      borderColorBackground: state.theme.borderColorBackground,
    };
  });

  const getSlideDots = (numberOfSlides) => {
    const slideDots = [...Array(numberOfSlides).keys()].reverse();
    return slideDots.map((n) => {
      const isActive = n == activeSlide;
      const borderColor = isActive ? borderColorAccent : borderColorBackground;
      return (
        <div
          className={`slideDot ${isActive && 'active'}`}
          key={n}
          onClick={() => {
            setSlide({ nr: n, up: true });
          }}
          onKeyPress={(e) => {
            if (e.key == 'Enter') {
              setSlide({ nr: n, up: true });
            }
          }}
          role='button'
          tabIndex='0'
          style={{ ...backgroundColorPrimary, ...borderColor }}></div>
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
        onKeyPress={(e) => {
          if (e.key == 'Enter') {
            changeSlide(1);
          }
        }}
        role='button'
        tabIndex='0'
        style={{ ...backgroundColorPrimary, ...borderColorBackground }}>
        <div style={borderColorAccent}></div>
      </div>
      {getSlideDots(numberOfSlides)}
      <div
        className='backArrow'
        onClick={() => {
          changeSlide(-1);
        }}
        onKeyPress={(e) => {
          if (e.key == 'Enter') {
            changeSlide(-1);
          }
        }}
        role='button'
        tabIndex='0'
        style={{ ...backgroundColorPrimary, ...borderColorBackground }}>
        <div style={borderColorAccent}></div>
      </div>
    </div>
  );
}

SliderControls.propTypes = {
  numberOfSlides: PropTypes.number,
  activeSlide: PropTypes.number,
  setSlide: PropTypes.func,
  changeSlide: PropTypes.func,
};

export default SliderControls;
