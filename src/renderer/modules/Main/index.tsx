import React from 'react';
import { observer } from 'mobx-react';

import { AddWordForm } from './components/AddWordForm';
import { SecretWord } from './components/SecretWord';
import { Space } from '../../collaborative/ui/Space';
import { wordStore } from '../../collaborative/stores/wordsStore';

export const Main = observer(() => {
  return (
    <>
      <AddWordForm />
      <Space block size={8} direction="vertical">
        {wordStore.words.map(({ ru, eng, id }) => (
          <SecretWord key={id} ru={ru} eng={eng} />
        ))}
      </Space>
    </>
  );
});
