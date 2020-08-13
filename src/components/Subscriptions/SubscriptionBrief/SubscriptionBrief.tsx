import React, { FC } from 'react';
import { motion } from 'framer-motion';

import classes from './SubscriptionBrief.module.scss';

type SubscriptionBriefProps = {
  id: string;
  title: string;
  logoURL: string;
};

export const SubscriptionBrief: FC<SubscriptionBriefProps> = ({
  id,
  title,
  logoURL,
}: SubscriptionBriefProps) => (
  <motion.li
    className={classes.brief}
    layoutId={id}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    variants={{ visible: { opacity: 1, x: 0 }, hidden: { opacity: 0, x: -100 } }}>
    <motion.img src={logoURL} alt={title} crossOrigin="anonymous" decoding="auto" />
  </motion.li>
);
