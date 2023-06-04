import { Button, Form, Input, Space } from 'antd';

import { observer } from 'mobx-react';
import css from './styles.module.css';
import { wordStore } from '../../../../collaborative/stores/wordsStore';

type WordForm = {
  ru: string;
  eng: string;
};

export const AddWordForm = observer(() => {
  const [form] = Form.useForm<WordForm>();

  const messages = [{ required: true, message: '' }];

  const handleSubmit = (values: WordForm) => {
    wordStore.control.createWord({ ru: values.ru, eng: values.eng });
    form.resetFields();
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Space>
        <Form.Item name="ru" rules={messages}>
          <Input size="middle" placeholder="Введите слово" />
        </Form.Item>
        <Form.Item name="eng" rules={messages}>
          <Input size="middle" placeholder="Введите перевод" />
        </Form.Item>
        <Button
          className={css.btn}
          htmlType="submit"
          size="middle"
          type="primary"
        >
          Добавить
        </Button>
      </Space>
    </Form>
  );
});
