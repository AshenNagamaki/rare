import React, { FC, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { Subscription as S } from '../types';
import { SubscriptionBrief } from './SubscriptionBrief/SubscriptionBrief';
import { SubscriptionContent } from './SubscriptionContent/SubscriptionContent';

type SubscriptionProps = {
  s: S;
  onExpand: () => void;
  onCollapse: () => void;
  isDisabled: boolean;
};

export const Subscription: FC<SubscriptionProps> = ({
  s,
  onExpand,
  onCollapse,
  isDisabled,
}: SubscriptionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const expandLayout = () => {
    setIsExpanded(true);
    onExpand();
  };

  const collapseLayout = () => {
    setIsExpanded(false);
    onCollapse();
  };

  return (
    <>
      <SubscriptionBrief
        id={s.id}
        title={s.title}
        logoURL={s.logoURL}
        onExpand={expandLayout}
        disabled={isDisabled}
      />
      <AnimatePresence initial={false}>
        {isExpanded && <SubscriptionContent s={s} onCollapse={collapseLayout} />}
      </AnimatePresence>
    </>
  );
};
