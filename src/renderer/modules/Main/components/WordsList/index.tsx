import React from 'react';

import { observer } from 'mobx-react';
import { Space } from '../../../../collaborative/ui/Space';
import { wordStore } from '../../../../collaborative/stores/wordsStore';
import { SecretWord } from './components/SecretWord';

export const WordsList = observer(() => {
  const store = wordStore;

  return (
    <Space block size={8} direction="vertical">
      {wordStore.words.map(({ id, ru, eng }) => (
        <SecretWord
          id={id}
          ru={ru}
          eng={eng}
          key={String(id)}
          onSelect={store.control.addWordToDelete}
          isDeleteMode={store.control.isDeleteMode}
        />
      ))}
    </Space>
  );
});
