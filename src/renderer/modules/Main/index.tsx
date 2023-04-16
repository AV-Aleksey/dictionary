import React, { useEffect } from 'react';
import { observer } from 'mobx-react';

import { AddWordForm } from './components/AddWordForm';
import { SecretWord } from './components/SecretWord';
import { Space } from '../../collaborative/ui/Space';

export const Main = observer(() => {
  // console.log(wordStore.words);
  return (
    <>
      <AddWordForm />
      <Space block size={8} direction="vertical">
        <SecretWord ru="Не понимаю" eng="not understend" />
        <SecretWord ru="Совет" eng="Advice" />
        <SecretWord ru="Пойти погулять" eng="go for walk" />
      </Space>
    </>
  );
});
