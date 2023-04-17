import { Button, Form, Input, Space } from 'antd';

import css from './styles.module.css';
import { wordStore } from '../../../../collaborative/stores/wordsStore';

type WordForm = {
  ru: string;
  eng: string;
};

export const AddWordForm = () => {
  const [form] = Form.useForm<WordForm>();

  const handleSubmit = async (values: WordForm) => {
    try {
      await wordStore.createWord({ ru: values.ru, eng: values.eng });
      form.resetFields();
    } catch (e) {
      console.log(e);
    }
  };

  const messages = [{ required: true, message: '' }];

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Space className={css.space} size={16}>
        <Form.Item name="ru" rules={messages}>
          <Input size="large" placeholder="Введите слово" />
        </Form.Item>
        <Form.Item name="eng" rules={messages}>
          <Input size="large" placeholder="Введите перевод" />
        </Form.Item>
        <Button
          className={css.btn}
          htmlType="submit"
          size="large"
          type="primary"
        >
          Добавить
        </Button>
      </Space>
    </Form>
  );
};
