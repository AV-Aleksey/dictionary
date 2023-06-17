import React from 'react';
import { observer } from 'mobx-react';

import { Space } from 'renderer/collaborative/components/ui/Space';
import { WordsTable } from './components/WordsTable';
import { AddWordForm } from './components/AddWordForm';

export const Words = observer(() => {
  return (
    <Space block size={16} direction="vertical">
      <AddWordForm />
      <WordsTable />
    </Space>
  );
});
