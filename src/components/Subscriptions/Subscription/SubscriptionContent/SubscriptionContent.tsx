import React, { FC } from 'react';
import { motion } from 'framer-motion';
import NumberFormat from 'react-number-format';
import getSymbolFromCurrency from 'currency-symbol-map';

import { Subscription as S } from '../../types';
import { capitalize, getDate } from '../../../../utilities/utilities';

import classes from './SubscriptionContent.module.scss';

type SCProps = {
  s: S;
  onCollapse: () => void;
};

const animationVariants = {
  visible: {
    y: 0,
    transition: {
      type: 'spring',
    },
  },
  hidden: {
    y: 135,
    transition: {
      duration: 0.25,
    },
  },
  exit: {
    y: 1000,
    transition: {
      duration: 0.35,
    },
  },
};

export const SubscriptionContent: FC<SCProps> = ({ s, onCollapse }: SCProps) => {
  const precision = 2;
  const periodFormatted = `${s.period}${s.periodUnit
    .toLocaleLowerCase(s.locale)
    .slice(0, 2)}.`;

  return (
    <motion.section
      id={s.id}
      key={s.id}
      className={classes.subscriptionContent}
      layoutId="subscription"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={animationVariants}>
      <motion.button
        className={classes.rollUp}
        onClick={onCollapse}
        whileHover={{ opacity: 0.7, scale: 1.5 }}
        whileTap={{ opacity: 0.9, scale: 1.1 }}
      />
      <motion.aside className={classes.logo} whileHover={{ scale: 1.02 }}>
        <motion.img
          src={s.logoURL}
          alt={s.title}
          crossOrigin="anonymous"
          decoding="auto"
        />
      </motion.aside>
      <article className={classes.description}>
        <h1 className={classes.title}>{s.title}</h1>
        <h5 className={`${classes.status} ${classes[s.status]}`}>{s.status}</h5>
        <p>
          Plan:<span>{`„${s.plan}”`}</span>
        </p>
        <p>
          Period:<span>{capitalize(s.periodUnit, s.locale)}</span>
        </p>
        <p>
          Periods:<span>{s.period}</span>
        </p>
        <p>
          From<span>{getDate(s.termStart, s.locale)}</span>Until
          <span>{getDate(s.termEnd, s.locale)}</span>
        </p>
        <p>
          Currency:<span>{s.currency.toLocaleUpperCase(s.locale)}</span>
        </p>
        <p>
          Amount:<span>{s.amount.toFixed(precision)}</span>
        </p>
        <hr />
        <h3>
          Totally:
          <NumberFormat
            displayType="text"
            value={(s.period * s.amount).toFixed(precision)}
            prefix={getSymbolFromCurrency(s.currency)}
            thousandSeparator
            renderText={(value) => <span>{`${value}/${periodFormatted}`}</span>}
          />
        </h3>
      </article>
      <footer className={classes.since}>Since {getDate(s.createdAt, s.locale)}</footer>
    </motion.section>
  );
};