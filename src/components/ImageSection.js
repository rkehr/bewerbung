import React from 'react';
import PropTypes from 'prop-types';
import { ImageFrame } from './';

function ImageSection({ image, imagePosition, children }) {
  return (
    <div
      className={`imageSection ${
        imagePosition == 'right' ? 'imageRight' : 'imageLeft'
      }`}>
      <ImageFrame image={image} />
      <div className='imageSectionContent'>{children}</div>
    </div>
  );
}

ImageSection.propTypes = {
  image: PropTypes.object,
  imagePosition: PropTypes.oneOf(['left', 'right']),
};

export default ImageSection;
