import React from 'react';
import { observer } from 'mobx-react';

import { Space } from '../../collaborative/components/ui/Space';
import { AddWordForm, ControlPanel, WordsList } from './components';

export const BaseWords = observer(() => {
  return (
    <Space size={16} direction="vertical">
      <AddWordForm />
      <ControlPanel />
      <WordsList />
    </Space>
  );
});
