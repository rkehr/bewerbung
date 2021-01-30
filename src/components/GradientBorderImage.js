import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../state';

function GradientBorderImage({ image }) {
  const themedBackground = useTheme({ backgroundColor: 'background' });
  const [isVisible, setIsVisible] = useState(false);
  const slowTransition = { ease: 'easeOut', duration: 1 };
  const slowerTransition = { ease: 'easeOut', duration: 1.5 };
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <AnimatePresence>
      <div className='gradientBorderImageWrapper'>
        {isVisible && (
          <motion.div
            className='gradientBorderImageFrame'
            initial={{ transform: 'rotateY(-90deg)' }}
            animate={{ transform: 'rotateY(0deg)' }}
            exit={{ transform: 'rotateY(90deg)' }}
            transition={slowerTransition}>
            <div
              className='gradientBorderImageBackground'
              style={themedBackground}></div>
          </motion.div>
        )}
        {isVisible && (
          <motion.img
            className='gradientBorderImage'
            initial={{ transform: 'rotateY(270deg)' }}
            animate={{ transform: 'rotateY(0deg)' }}
            exit={{ transform: 'rotateY(90deg)' }}
            transition={slowTransition}
            src={image.url}
            alt={image.alt}
          />
        )}
      </div>
    </AnimatePresence>
  );
}

GradientBorderImage.propTypes = {
  image: PropTypes.object,
};

export default GradientBorderImage;
