'use client';

import { motion } from 'framer-motion';

import { textContainer, textVariant2 } from '../utils/motion';

export const TypingText = ({ title, textStyles }) => (
  <motion.p
  variants={textContainer}
  className={`font-normal text-[14px] text-secondary-white ${textStyles}}`}
  >
    {Array.from(title).map((Letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {Letter === ' ' ? '\u00A0' : Letter}
      </motion.span>
    ))}
  </motion.p>

  
);
//5:21 will have to redo 1&2 due to screw up with template literals
export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
    >
    {title}
  </motion.h2>
);
