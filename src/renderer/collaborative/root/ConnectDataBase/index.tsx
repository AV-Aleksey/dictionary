import React, { FC, useEffect, useState } from 'react';
import { Spin } from 'antd';
import { observer } from 'mobx-react';
import { wordStore } from '../../stores/wordsStore';
import { Container } from '../../layout/Container';

type Props = {
  children: ReturnType<FC>;
};

export const ConnectDataBase: FC<Props> = observer(({ children }) => {
  const [hasErr, setHasErr] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      wordStore
        .initWords()
        .then()
        .catch((e) => {
          console.log(e);
          setHasErr(true);
        });
    }, 1000);
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
