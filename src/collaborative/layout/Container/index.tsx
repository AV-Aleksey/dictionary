import React, { FC } from 'react';

import css from './styles.module.css';

type Props = {
  children: ReturnType<FC>;
};

export const Container: FC<Props> = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};
