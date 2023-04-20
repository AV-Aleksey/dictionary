import React from 'react';
import { observer } from 'mobx-react';

import { AddWordForm } from './components/AddWordForm';
import { Space } from '../../collaborative/ui/Space';
import { ControlPanel } from './components/ControlPanel';
import { WordsList } from './components/WordsList';

export const Main = observer(() => {
  return (
    <Space size={16} direction="vertical">
      <AddWordForm />
      <ControlPanel />
      <WordsList />
    </Space>
  );
});
