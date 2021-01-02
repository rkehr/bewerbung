import React from 'react';
import PropTypes from 'prop-types';
import { useThemeStore } from '../state';
import { socialMediaPlatforms } from '../data';

const SocialMediaLink = ({ platformName, handle, link, className }) => {
  const linkStyle = useThemeStore(({ applyTheme }) =>
    applyTheme({
      color: 'primary',
    })
  );
  const iconStyle = useThemeStore(({ applyTheme }) =>
    applyTheme({
      color: 'accent',
    })
  );

  const { icon, handlePrefix } = socialMediaPlatforms[platformName];
  return (
    <a href={link} className={`socialMediaLink ${className}`} style={linkStyle}>
      <span className='socialMediaIcon' style={{ iconStyle }}>
        {React.createElement(icon)}
      </span>
      <span>{handlePrefix + handle}</span>
    </a>
  );
};

SocialMediaLink.propTypes = {
  platformName: PropTypes.string,
  handle: PropTypes.string,
  link: PropTypes.string,
  className: PropTypes.string,
};

export default SocialMediaLink;
