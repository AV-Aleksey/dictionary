import React, { CSSProperties, FC } from 'react';

import css from './styles.module.css';

type Props = {
  block?: boolean;
  direction?: 'vertical' | 'horizontal';
  size?: number;
  children?: any;
};

export const Space: FC<Props> = ({
  block = true,
  direction = 'vertical',
  size = 8,
  children,
}) => {
  const wrapStyle = {
    display: block ? 'flex' : 'inline-flex',
    flexDirection: direction === 'vertical' ? 'column' : 'row',
    width: block ? '100%' : undefined,
  } as CSSProperties;

  const itemStyle = {
    marginRight: direction === 'horizontal' ? size : undefined,
    marginBottom: direction === 'vertical' ? size : undefined,
  } as CSSProperties;

  return (
    <div style={wrapStyle} className={css.wrap}>
      {React.Children.map(children, (item) => (
        <div style={itemStyle}>{item}</div>
      ))}
    </div>
  );
};
