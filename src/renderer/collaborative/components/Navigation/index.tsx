import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

import { LeftOutlined } from '@ant-design/icons';

import css from './styles.module.css';

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [disabled, setDisabled] = useState(
    Boolean(location.state?.prevPathname)
  );

  useEffect(() => {
    setDisabled(location.pathname === '/');
  }, [location.pathname]);

  return (
    <div className={css.wrap}>
      <Button
        onClick={() => navigate(-1)}
        shape="circle"
        disabled={disabled}
        icon={<LeftOutlined />}
      />
    </div>
  );
};
