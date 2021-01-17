import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import SliderControls from './SliderControls';

const Slider = ({ children, hasNavigation, className }) => {
  const [slide, setSlide] = useState({ nr: 0, direction: true });
  const [showNavigation] = useState(
    hasNavigation == undefined ? true : hasNavigation
  );
  const childArray = React.Children.toArray(children);

  const animationPositions = {
    out: (direction) => {
      return {
        opacity: 0,
        y: direction > 0 ? 1000 : -1000,
      };
    },
    in: { opacity: 1, y: 0 },
    init: (direction) => {
      return { opacity: 1, y: direction < 0 ? 1000 : -1000 };
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
  const swipeConfidenceThreshold = 10000;

  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div className={'slider ' + className}>
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
            transition={{ duration: 0.3 }}
            drag='y'
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={1}
            onDragEnd={(_e, { offset, velocity }) => {
              const swipe = swipePower(offset.y, velocity.y);
              if (swipe < -swipeConfidenceThreshold) {
                changeSlide(-1);
              } else if (swipe > swipeConfidenceThreshold) {
                changeSlide(1);
              }
            }}>
            {childArray[slide.nr]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

Slider.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  hasNavigation: PropTypes.bool,
};

export default Slider;
