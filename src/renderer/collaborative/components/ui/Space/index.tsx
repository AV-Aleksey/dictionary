import React, {
  useMemo,
  ReactNode,
  forwardRef,
  CSSProperties,
  HTMLAttributes,
  useCallback,
} from 'react';
import { isString, isNumber } from 'lodash';
import cn from 'classnames';

import css from './styles.module.css';

type Events = Pick<
  HTMLAttributes<HTMLDivElement>,
  'onClick' | 'onMouseEnter' | 'onMouseLeave' | 'onFocus'
>;

export type SpaceProps = Partial<{
  wrap: boolean;
  block: boolean;
  className: string;
  children: ReactNode;
  flex: CSSProperties['flex'];
  align: CSSProperties['alignItems'];
  justify: CSSProperties['justifyContent'];
  direction: 'horizontal' | 'vertical';
  size: 'small' | 'medium' | 'large' | 'responsive' | number;
}> &
  Events;

export const Space = forwardRef<HTMLDivElement, SpaceProps>(
  ({
    wrap,
    flex,
    block,
    align,
    justify,
    children,
    className,
    size = 'small',
    direction = 'horizontal',
    ...events
  }) => {
    const innerRef = useCallback(
      (node: HTMLDivElement | null) => {
        if (node && isNumber(size)) {
          node.style.setProperty('--space', `${size}px`);
        }
      },
      [size]
    );

    const style = useMemo(
      () => ({ flex, alignItems: align, justifyContent: justify }),
      [flex, align, justify]
    );

    return (
      <div
        ref={innerRef}
        className={cn(
          css[direction],
          className,
          block ? css.block : css.inline,
          {
            [css.wrap]: wrap,
            [css[size]]: isString(size),
            [css.flexible]: true,
          }
        )}
        style={style}
        {...events}
      >
        {children}
      </div>
    );
  }
);

Space.displayName = 'Space';
