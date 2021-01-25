import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

const CollapsibleText = ({
  excerptLength,
  excerptPostfix,
  open,
  OpeningElement,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <AnimateSharedLayout>
      <AnimatePresence>
        <motion.div layout>
          <motion.div
            transition={{ duration: 0.2 }}
            layout
            layoutId='paragraph'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opcaity: 0 }}>
            {getExcerpt(
              children,
              !isOpen ? excerptLength || 20 : -1,
              excerptPostfix || '...'
            )}
          </motion.div>
        </motion.div>
        <motion.button
          style={{
            width: '3rem',
            height: '3rem',
            borderRadius: '50%',
            background: 'none',
            border: 'none',
          }}
          key='button'
          layout
          onClick={() => {
            setIsOpen(!isOpen);
          }}>
          ...
        </motion.button>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};

CollapsibleText.propTypes = {
  excerptLength: PropTypes.number,
  excerptPostfix: PropTypes.string,
  isOpen: PropTypes.bool,
  OpeningElement: PropTypes.func,
};

export default CollapsibleText;

const getExcerpt = (content, length, postfix) => {
  if (length == -1 || content.length < length) {
    return content;
  }
  return content.substring(0, length) + postfix;
};
