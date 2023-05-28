import React from 'react';
import { observer } from 'mobx-react';
import { Link, useNavigate } from 'react-router-dom';
import { BarsOutlined, SnippetsOutlined } from '@ant-design/icons';

import { Space } from '../../collaborative/components/ui/Space';
import ModuleTab from './components/ModuleTab';

export const Main = observer(() => {
  const navigate = useNavigate();

  return (
    <Space size={16}>
      <Space size={20} direction="horizontal">
        <Link to="/words">
          <ModuleTab
            title="Словарь"
            icon={<SnippetsOutlined />}
            onClick={() => console.log('1')}
          />
        </Link>

        <ModuleTab
          title="Тренинг"
          icon={<BarsOutlined />}
          onClick={() => console.log('1')}
        />
      </Space>
    </Space>
  );
});
