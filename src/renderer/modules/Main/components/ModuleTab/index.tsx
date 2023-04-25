import React, { FC } from 'react';
import css from './styles.module.css';

interface Props {
  title: string;
  icon: ReturnType<FC>;
  onClick?: () => void;
}

const ModuleTab: FC<Props> = ({ title, icon, onClick }) => {
  return (
    <div className={css.tab} onClick={onClick}>
      <div className={css.tabIcon}>{icon}</div>
      <span className={css.title}>{title}</span>
    </div>
  );
};

export default ModuleTab;
