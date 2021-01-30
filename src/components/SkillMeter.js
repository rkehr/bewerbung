import React from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';
import useInView from 'react-cool-inview';
import { useTheme } from '../state';

const SkillMeter = ({ name, percentage }) => {
  const isPositive = percentage >= 0;
  const themedSKillMeterFill = useTheme({
    backgroundColor: isPositive ? 'accent' : 'red',
    transform: !isPositive ? 'translateX(calc(-100% + 0.6rem))' : 'none',
  });
  const themedSkillMeterBorder = useTheme({
    borderColor: 'primary',
  });

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
      width: `${Math.abs(w)}%`,
    }),
    hidden: { width: '0%' },
  };

  return (
    <div ref={ref}>
      <span> {name}</span>
      <div className='skillMeterBorder' style={themedSkillMeterBorder}>
        <motion.div
          style={themedSKillMeterFill}
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
