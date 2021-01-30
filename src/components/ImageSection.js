import React from 'react';
import PropTypes from 'prop-types';
import { ImageFrame } from './';
import { useTheme } from '../state';

const ImageSection = ({ image, imagePosition, children }) => {
  const themedImageSectionContent = useTheme({
    backgroundColor: 'backgroundDark',
    color: 'color',
  });
  return (
    <div
      className={`imageSection ${
        imagePosition == 'right' ? 'imageRight' : 'imageLeft'
      }`}>
      <ImageFrame image={image} />
      <div className='imageSectionContent' style={themedImageSectionContent}>
        {children}
      </div>
    </div>
  );
};

ImageSection.propTypes = {
  image: PropTypes.object,
  imagePosition: PropTypes.oneOf(['left', 'right']),
  children: PropTypes.any,
};

export default ImageSection;
