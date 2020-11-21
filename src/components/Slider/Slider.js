import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import SliderControls from './SliderControls';

const Slider = ({ children, hasNavigation }) => {
  const [slide, setSlide] = useState({ nr: 0, up: true });
  const [showNavigation] = useState(
    hasNavigation == undefined ? true : hasNavigation
  );
  const childArray = React.Children.toArray(children);

  const animationPositions = {
    outTop: { opacity: 0, transform: 'translate(5rem, -100vh) rotate(15deg)' },
    outBottom: {
      opacity: 0,
      transform: 'translate(-5rem, 100vh) rotate(15deg)',
    },
    out: (top) => {
      return {
        opacity: 0,
        transform: `translate(5rem,${top ? '-' : ''}100vh) rotate(15deg)`,
      };
    },
    in: { opacity: 1 },
    init: { opacity: 0 },
  };

  const changeSlide = (v) => {
    const isUp = v > 0 ? true : false;
    if (slide.nr + v < 0) {
      setSlide({ nr: childArray.length - 1, up: isUp });
    } else {
      setSlide({ nr: (slide.nr + v) % childArray.length, up: isUp });
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
        <AnimatePresence custom={Slider.up}>
          <motion.div
            className='slide'
            key={slide.nr}
            variants={animationPositions}
            custom={slide.up}
            initial='init'
            animate='in'
            exit='out'>
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
