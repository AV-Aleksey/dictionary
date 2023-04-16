import React, { FC, useEffect, useState } from 'react';
import { Spin } from 'antd';
import { observer } from 'mobx-react';
import { wordStore } from '../../stores/wordsStore';
import { Container } from '../../layout/Container';
import { createWord } from '../../repository';

type Props = {
  children: ReturnType<FC>;
};

export const ConnectDataBase: FC<Props> = observer(({ children }) => {
  const [hasErr, setHasErr] = useState(false);

  useEffect(() => {
    wordStore.initWords();
    // createWord({ ru: 'Привет', eng: 'Hello' }).then(console.log);
  }, []);

  if (hasErr) {
    return (
      <Container>
        <span>Ошибка загрузки данных</span>
      </Container>
    );
  }

  if (!wordStore.initHasWasFished) {
    return (
      <Container>
        <Spin size="large" />
      </Container>
    );
  }

  return children;
});
