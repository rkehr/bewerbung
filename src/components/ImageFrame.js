import React from 'react';
import PropTypes from 'prop-types';

function ImageFrame({ image }) {
  return (
    <div className='imageFrame'>
      {image ? (
        <img
          src={image.url}
          alt={image.alt}
          onDragStart={(e) => {
            e.preventDefault();
          }}
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
