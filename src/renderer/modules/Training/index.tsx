import React from 'react';
import { observer } from 'mobx-react';

import { Space } from '../../collaborative/components/ui/Space';
import { WordsList } from './components';

export const Training = observer(() => {
  return (
    <Space block size={16} direction="vertical">
      <WordsList />
    </Space>
  );
});
