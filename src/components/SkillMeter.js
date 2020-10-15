import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import useInView from 'react-cool-inview';

const SkillMeter = ( { name, percentage } ) => {
    const { ref, inView, scrollDirection, entry, observe, unobserve } = useInView({
            onEnter: ()=>{controls.start("visible");},
            onLeave: ()=>{controls.start("hidden");}
            });
    const controls = useAnimation();
    const soft ={
        ease: "easeInOut",
        duration: 2
    }
    const variants ={
        visible: w => ({
            width: w + "%",
        }),
        hidden: { width: "0%" }
    }

    return (
        <div ref={ref}>
            <span> { name }</span>
            <div className="skillMeterBorder">
                <motion.div
                    className="skillMeterFill"  
                    
                    transition={soft}
                    custom={ percentage }
                    initial="hidden"
                    animate={ controls }
                    variants={ variants }

                >

                </motion.div>
            </div>
        </div>
    )
};

export default SkillMeter;