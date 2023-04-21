import { Button } from 'antd';
import React, { FC } from 'react';
import { observer } from 'mobx-react';
import { DeleteOutlined, EditOutlined, SyncOutlined } from '@ant-design/icons';

import { Space } from '../../../../collaborative/ui/Space';
import { wordStore } from '../../../../collaborative/stores/wordsStore';

export const ControlPanel: FC = observer(() => {
  const store = wordStore.control;

  const handleActivateDeleteMode = () => {
    if (store.isDeleteMode && Object.keys(store.toDeleteWords).length) {
      store.deleteWords();
    }
    store.activateDeleteMode(!store.isDeleteMode);
  };

  return (
    <Space direction="horizontal">
      <Button
        onClick={handleActivateDeleteMode}
        type={store.isDeleteMode ? 'default' : 'primary'}
        icon={<DeleteOutlined />}
      />
      <Button
        type={store.isUpdateMode ? 'default' : 'primary'}
        icon={<EditOutlined />}
      />
    </Space>
  );
});
