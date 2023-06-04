import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { BarsOutlined, SnippetsOutlined } from '@ant-design/icons';

import { routes } from 'renderer/routes';
import { Space } from '../../collaborative/components/ui/Space';
import ModuleTab from './components/ModuleTab';

export const Main = observer(() => {
  return (
    <Space block size={16}>
      <Space size={16} direction="horizontal">
        <Link to={routes.main.children.words.path}>
          <ModuleTab title="Словарь" icon={<SnippetsOutlined />} />
        </Link>
        <Link to={routes.main.children.training.path}>
          <ModuleTab title="Тренинг" icon={<BarsOutlined />} />
        </Link>
      </Space>
    </Space>
  );
});
