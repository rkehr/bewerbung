import React from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';
import useInView from 'react-cool-inview';
import { useThemeStore } from '../state';

const SkillMeter = ({ name, percentage }) => {
  const {
    borderColorPrimary,
    backgroundColorAccent,
    colorPrimary,
  } = useThemeStore((state) => ({
    borderColorPrimary: state.theme.borderColorPrimary,
    backgroundColorAccent: state.theme.backgroundColorAccent,
    colorPrimary: state.theme.colorPrimary,
  }));

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
    visible: (w) => ({
      width: w >= 0 ? `${w}%` : `${w * -1}%`,
    }),
    hidden: { width: '0%' },
  };

  const isPositive = percentage >= 0;

  return (
    <div ref={ref}>
      <span style={colorPrimary}> {name}</span>
      <div className='skillMeterBorder' style={borderColorPrimary}>
        <motion.div
          style={{
            ...backgroundColorAccent,
            transform: !isPositive
              ? `translateX(calc(-100% + 0.6rem))`
              : 'none',
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
