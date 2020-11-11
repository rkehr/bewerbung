import React from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';
import useInView from 'react-cool-inview';
import { useGlobalStore } from '../state';

const SkillMeter = ({ name, percentage }) => {
  const {
    borderColorPrimary,
    backgroundColorAccent,
    colorPrimary,
  } = useGlobalStore(state => state.theme);
  const { ref } = useInView({
    unobserveOnEnter: true,
    onEnter: () => {
      controls.start('visible');
    },
    onLeave: () => {
      controls.start('hidden');
    },
  });
  const controls = useAnimation();
  const soft = {
    ease: 'easeInOut',
    duration: 2,
  };
  const variants = {
    visible: w => ({
      width: w >= 0 ? w + '%' : -w + '%',
    }),
    hidden: { width: '0%' },
  };

  return (
    <div ref={ref}>
      <span style={colorPrimary}> {name}</span>
      <div className='skillMeterBorder' style={borderColorPrimary}>
        <motion.div
          style={{
            ...backgroundColorAccent,
            transform: percentage < 0 ? `translateX(${percentage}%)` : 'none',
          }}
          className='skillMeterFill'
          transition={soft}
          custom={percentage}
          initial='hidden'
          animate={controls}
          variants={variants}></motion.div>
      </div>
    </div>
  );
};

SkillMeter.propTypes = {
  name: PropTypes.string,
  percentage: PropTypes.number,
};

export default SkillMeter;
