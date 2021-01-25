import React from 'react';
import PropTypes from 'prop-types';
import { ImageFrame } from './';
import { useThemeStore } from '../state';

const ImageSection = ({ image, imagePosition, children }) => {
  const imageSectionContentStyle = useThemeStore(({ applyTheme }) => {
    return applyTheme({
      backgroundColor: 'backgroundDark',
      color: 'color',
    });
  });
  return (
    <div
      className={`imageSection ${
        imagePosition == 'right' ? 'imageRight' : 'imageLeft'
      }`}>
      <ImageFrame image={image} />
      <div className='imageSectionContent' style={imageSectionContentStyle}>
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
