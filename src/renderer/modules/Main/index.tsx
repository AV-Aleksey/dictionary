import React, { useState } from 'react';

import { Button } from 'antd';
import { AddWordForm } from './components/AddWordForm';
import { SecretWord } from './components/SecretWord';
import { Space } from '../../../collaborative/ui/Space';

export default function send(sql: string) {
  return new Promise((resolve) => {
    window.electron.ipcRenderer.once('asynchronous-reply', (_, arg) => {
      resolve(arg);
    });
    window.electron.ipcRenderer.sendMessage('asynchronous-message', sql);
  });
}

export const Main = () => {
  const [message, setMessage] = useState('SELECT * FROM repositories');

  const handleSend = () => {
    send(message)
      .then((result) => console.log({ result }))
      .catch((e) => console.log(e));
  };

  return (
    <>
      <Button onClick={handleSend}>db</Button>
      <AddWordForm />
      <Space block size={8} direction="vertical">
        <SecretWord ru="Не понимаю" eng="not understend" />
        <SecretWord ru="Совет" eng="Advice" />
        <SecretWord ru="Пойти погулять" eng="go for walk" />
      </Space>
    </>
  );
};
