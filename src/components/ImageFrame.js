import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

function ImageFrame({ image }) {
  return (
    <div className='imageFrame'>
      {image ? (
        <motion.img
          src={image.url}
          alt={image.alt}
          onDragStart={(e) => {
            e.preventDefault();
          }}
          drag
        />
      ) : (
        'No image provided'
      )}
    </div>
  );
}

ImageFrame.propTypes = {
  image: PropTypes.object,
};

export default ImageFrame;
