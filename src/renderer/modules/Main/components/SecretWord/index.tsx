import { FC, useState } from 'react';
import { Badge, Button, Typography } from 'antd';

import { Tile } from 'collaborative/ui/Tile';
import { AlignCenterOutlined } from '@ant-design/icons';
import css from './styles.module.css';

type Props = {
  ru: string;
  eng: string;
  hasEngSecret?: boolean;
};

export const SecretWord: FC<Props> = ({ ru, eng, hasEngSecret = true }) => {
  const [showSecret, setShowSecret] = useState(false);

  const handleToggleSecret = () => {
    setShowSecret(!showSecret);
  };

  const getSecretText = () => {
    if (showSecret) {
      return (
        <Typography.Paragraph className={css.text}>
          {hasEngSecret ? eng : ru}
        </Typography.Paragraph>
      );
    }

    return <div className={css.secret} />;
  };

  return (
    <Tile>
      <div className={css.wrap}>
        <div className={css.textWrap}>
          <Typography.Paragraph className={css.text}>
            {hasEngSecret ? ru : eng}
          </Typography.Paragraph>
          <div className={css.secretTextWrap}>{getSecretText()}</div>
        </div>
        <div className={css.controlWrap}>
          <div>
            <Badge color="#f50" size="small" />
          </div>
          <Button icon="1" />
          <Button onClick={handleToggleSecret} icon={<AlignCenterOutlined />} />
        </div>
      </div>
    </Tile>
  );
};
