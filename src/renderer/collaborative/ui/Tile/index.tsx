import React, { FC } from 'react';

import css from './styles.module.css';

type Props = {
  children: any;
};

export const Tile: FC<Props> = ({ children }) => {
  return <div className={css.wrap}>{children}</div>;
};
