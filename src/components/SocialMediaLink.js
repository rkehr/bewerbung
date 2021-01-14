import React from 'react';
import PropTypes from 'prop-types';
import { useThemeStore } from '../state';
import { socialMediaPlatforms } from '../data';

const SocialMediaLink = ({
  platformName,
  handle,
  link,
  className,
  copyLinkOnClick,
}) => {
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

  const { Icon, ActionIcon, handlePrefix } = socialMediaPlatforms[platformName];
  return (
    <a
      href={copyLinkOnClick ? '' : link}
      className={`socialMediaLink ${className}`}
      style={linkStyle}
      target={!copyLinkOnClick && '_blank'}>
      <span
        className='socialMediaIcon'
        style={{ iconStyle }}
        onClick={
          copyLinkOnClick &&
          (() => {
            navigator.clipboard.writeText(link);
          })
        }>
        <Icon />
      </span>
      <span>
        {handlePrefix + handle}
        <ActionIcon className='actionIcon' />
      </span>
    </a>
  );
};

SocialMediaLink.propTypes = {
  platformName: PropTypes.string,
  handle: PropTypes.string,
  link: PropTypes.string,
  className: PropTypes.string,
  copyLinkOnClick: PropTypes.bool,
};

export default SocialMediaLink;
