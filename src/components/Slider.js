import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

const Slider = ({ children }) => {
  const [slide, setSlide] = useState(0);
  const [slideUp, setSlideUp] = useState(true);
  const [showArrows, setShowArrows] = useState(true);
  const [showNavigation, setShowNavigation] = useState(true);
  const childArray = React.Children.toArray(children);
  const addSlide = (s) => {
    setSlideUp(s > 0 ? false : true);
    if (slide + s < 0) {
      setSlide(childArray.length - 1);
    } else {
      setSlide((slide + s) % childArray.length);
    }
  };
  return (
    <div className='slider'>
      {showArrows && (
        <>
          <div
            className='forwardArrow'
            onClick={() => {
              addSlide(1);
            }}>
            <div></div>
          </div>
          <div
            className='backArrow'
            onClick={() => {
              addSlide(-1);
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
            key={slide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transform: slideUp
                ? 'translate(5rem, -100vh) rotate(15deg)'
                : 'translate(-5rem, 100vh) rotate(15deg)',
            }}>
            {childArray[slide]}
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
