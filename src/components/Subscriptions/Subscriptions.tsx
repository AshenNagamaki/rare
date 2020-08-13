import React, { FC } from 'react';
import { motion } from 'framer-motion';

import classes from './Subscriptions.module.scss';

export const Subscriptions: FC = () => (
  <section className={classes.subscriptions}>
    <motion.h1
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}>
      Subscriptions
    </motion.h1>
    <motion.ul
      className={classes.subscriptions}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          opacity: 1,
          transition: {
            when: 'beforeChildren',
            staggerChildren: 0.1,
          },
        },
        hidden: {
          opacity: 0,
          transition: {
            when: 'afterChildren',
          },
        },
      }}
    />
  </section>
);
