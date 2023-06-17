import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

import { LeftOutlined } from '@ant-design/icons';

import css from './styles.module.css';

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showBtn, setShowBtn] = useState(Boolean(location.state?.prevPathname));

  useEffect(() => {
    setShowBtn(location.pathname !== '/');
  }, [location.pathname]);

  return (
    <div className={css.wrap}>
      {showBtn && (
        <Button
          onClick={() => navigate(-1)}
          shape="circle"
          icon={<LeftOutlined />}
        />
      )}
    </div>
  );
};
