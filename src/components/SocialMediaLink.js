import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useThemeStore } from '../state';
import { socialMediaPlatforms } from '../data';
import { AnimatePresence, motion } from 'framer-motion';

const SocialMediaLink = ({
  platformName,
  handle,
  link,
  className,
  copyLinkOnClick,
}) => {
  const [wasCopied, setWasCopied] = useState(false);
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
  const Element = copyLinkOnClick ? 'button' : 'a';

  const { Icon, ActionIcon, handlePrefix } = socialMediaPlatforms[platformName];
  return (
    <Element
      href={copyLinkOnClick ? '' : link}
      className={`socialMediaLink ${className}`}
      style={linkStyle}
      target={!copyLinkOnClick ? '_blank' : undefined}
      onClick={
        copyLinkOnClick &&
        ((e) => {
          e.preventDefault();
          navigator.clipboard.writeText(link);
          setWasCopied(true);
          setTimeout(() => {
            setWasCopied(false);
          }, 1300);
        })
      }>
      <span className='socialMediaIcon' style={{ iconStyle }}>
        <Icon />
      </span>
      <span className='socialMediaHandle'>{handlePrefix + handle}</span>
      <br />
      <div style={{ position: 'relative' }}>
        <AnimatePresence>
          {wasCopied && (
            <motion.div
              style={{ position: 'absolute', top: 0, left: 0, right: 0 }}
              key={platformName + handle + 'text'}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}>
              Kopiert!
            </motion.div>
          )}
          {!wasCopied && (
            <motion.div
              style={{ position: 'absolute', top: 0, left: 0, right: 0 }}
              key={platformName + handle + 'icon'}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}>
              <ActionIcon className='actionIcon' />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Element>
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
