import React, { FC, useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock';

import { Subscription as S, Subscriptions as SS } from './types';
import { Subscription } from './Subscription/Subscription';

import classes from './Subscriptions.module.scss';

type SubscriptionsProps = {
  listing: SS;
};

const animationVariants = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.075,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
};

export const Subscriptions: FC<SubscriptionsProps> = ({
  listing,
}: SubscriptionsProps) => {
  const listingRef = useRef(null);
  const [subscription, setSubscription] = useState<S | null>(null);

  useEffect(() => {
    const listingEl = listingRef.current;
    subscription !== null && disableBodyScroll(listingEl, { reserveScrollBarGap: true });
    return () => {
      enableBodyScroll(listingEl);
    };
  }, [subscription]);

  const subscriptions = listing.map((s: S) => (
    <Subscription
      key={s.id}
      s={s}
      onExpand={() => setSubscription(s)}
      onCollapse={() => setSubscription(null)}
      isDisabled={subscription !== null && subscription?.id !== s.id}
    />
  ));

  return (
    <section ref={listingRef} className={classes.subscriptions}>
      <motion.h1
        className={classes.heading}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}>
        Subscriptions
      </motion.h1>
      {subscription !== null && <div className={classes.overlay} />}
      <motion.ul initial="hidden" animate="visible" variants={animationVariants}>
        {subscriptions}
      </motion.ul>
    </section>
  );
};
