import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import SliderControls from './SliderControls';

const Slider = ({ children, hasNavigation }) => {
  const [slide, setSlide] = useState({ nr: 0, direction: true });
  const [showNavigation] = useState(
    hasNavigation == undefined ? true : hasNavigation
  );
  const childArray = React.Children.toArray(children);

  const animationPositions = {
    outTop: { opacity: 0, transform: 'translateY(-100vh)' },
    outBottom: {
      opacity: 0,
      transform: 'translateY(100vh)',
    },
    out: (direction) => {
      return {
        opacity: 0,
        y: direction > 0 ? '100vh' : '-100vh',
      };
    },
    in: { opacity: 1, y: 0 },
    init: (direction) => {
      return { opacity: 0, y: direction < 0 ? '100vh' : '-100vh' };
    },
  };

  const changeSlide = (v) => {
    if (slide.nr + v < 0) {
      setSlide({ nr: childArray.length - 1, direction: v });
    } else {
      setSlide({
        nr: (slide.nr + v) % childArray.length,
        direction: v,
      });
    }
  };

  return (
    <div className='slider'>
      {showNavigation && (
        <SliderControls
          numberOfSlides={childArray.length}
          activeSlide={slide.nr}
          setSlide={setSlide}
          changeSlide={changeSlide}></SliderControls>
      )}
      <div className='sliderContent'>
        <AnimatePresence initial={true} custom={slide.direction}>
          <motion.div
            className='slide'
            key={slide.nr.toString() + slide.direction.toString()}
            variants={animationPositions}
            custom={slide.direction}
            initial='init'
            animate='in'
            exit='out'
            transition={{ duration: 0.75 }}>
            {childArray[slide.nr]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

Slider.propTypes = {
  children: PropTypes.any,
  hasNavigation: PropTypes.bool,
};

export default Slider;
