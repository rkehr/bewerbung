import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../../state';
import { motion, AnimateSharedLayout } from 'framer-motion';

function SliderControls({
  numberOfSlides,
  activeSlide,
  setSlide,
  changeSlide,
}) {
  const themedSlideIndicator = useTheme({
    backgroundColor: 'accent',
    borderRadius: '50%',
    height: '100%',
    width: '100%',
  });
  const themedSlideControls = useTheme({
    backgroundColor: 'primary',
    borderColor: 'background',
  });
  const themedArrow = useTheme({ borderColor: 'accent' });

  const getSlideDots = (numberOfSlides) => {
    const slideDots = [...Array(numberOfSlides).keys()].reverse();
    return slideDots.map((n) => {
      const isActive = n == activeSlide;
      return (
        <div
          className={'slideDot'}
          key={n}
          onClick={() => {
            const direction = n > activeSlide ? 1 : -1;
            setSlide({
              nr: n,
              direction: direction,
            });
          }}
          onKeyPress={(e) => {
            if (e.key == 'Enter') {
              setSlide({ nr: n, direction: 1 });
            }
          }}
          role='button'
          tabIndex='0'
          style={themedSlideControls}>
          {isActive && (
            <motion.div
              style={themedSlideIndicator}
              transition={{ duration: 0.2 }}
              layout
              layoutId='activeSlideIndicator'
              animate={{ y: 0 }}
            />
          )}
        </div>
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
        style={themedSlideControls}>
        <div style={themedArrow}></div>
      </div>
      <AnimateSharedLayout>{getSlideDots(numberOfSlides)}</AnimateSharedLayout>
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
        style={{ themedSlideControls }}>
        <div style={themedArrow}></div>
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
