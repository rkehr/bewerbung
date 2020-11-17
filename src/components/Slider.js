import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence, transform } from 'framer-motion';

const Slider = ({ children }) => {
  const [slide, setSlide] = useState({ nr: 0, up: true });
  const [showArrows, setShowArrows] = useState(true);
  const [showNavigation, setShowNavigation] = useState(true);
  const childArray = React.Children.toArray(children);

  const animationPositions = {
    outTop: { opacity: 0, transform: 'translate(5rem, -100vh) rotate(15deg)' },
    outBottom: {
      opacity: 0,
      transform: 'translate(-5rem, 100vh) rotate(15deg)',
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
      {showArrows && (
        <>
          <div
            className='forwardArrow'
            onClick={() => {
              changeSlide(1);
            }}>
            <div></div>
          </div>
          <div
            className='backArrow'
            onClick={() => {
              changeSlide(-1);
            }}>
            <div></div>
          </div>
        </>
      )}
      <div className='SliderNavigation'></div>
      <div className='sliderContent'>
        <AnimatePresence>
          <motion.div
            className='slide'
            key={slide.nr}
            variants={animationPositions}
            initial='init'
            animate='in'
            exit='outTop'>
            {console.log(slide.nr)}
            {childArray[slide.nr]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

Slider.propTypes = {
  children: PropTypes.any,
};

export default Slider;
