import React from 'react';
import PropTypes from 'prop-types';

function ImageFrame({ image }) {
  return <div className='test'>{<img src={image.url} alt={image.alt} />}</div>;
}
ImageFrame.propTypes = {
  image: PropTypes.object,
};
export default ImageFrame;
