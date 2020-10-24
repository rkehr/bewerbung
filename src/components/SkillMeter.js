import React from 'react';
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
      width: w + '%',
    }),
    hidden: { width: '0%' },
  };

  return (
    <div ref={ref}>
      <span style={colorPrimary}> {name}</span>
      <div className='skillMeterBorder' style={borderColorPrimary}>
        <motion.div
          style={backgroundColorAccent}
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

export default SkillMeter;
