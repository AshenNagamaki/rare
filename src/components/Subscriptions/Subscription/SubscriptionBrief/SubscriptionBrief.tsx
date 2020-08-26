import React, { FC } from 'react';
import { motion } from 'framer-motion';

import classes from './SubscriptionBrief.module.scss';

type SBProps = {
  id: string;
  title: string;
  logoURL: string;
  onExpand: () => void;
  disabled: boolean;
};

const briefVariants = {
  visible: { x: 0, opacity: 1 },
  hidden: { x: -100, opacity: 0 },
};

export const SubscriptionBrief: FC<SBProps> = ({
  id,
  title,
  logoURL,
  onExpand,
  disabled,
}: SBProps) => (
  <motion.li
    id={id}
    key={id}
    className={classes.brief}
    onClick={disabled ? undefined : onExpand}
    layoutId="subscription"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.99 }}
    variants={briefVariants}>
    <motion.img src={logoURL} alt={title} crossOrigin="anonymous" decoding="auto" />
  </motion.li>
);
