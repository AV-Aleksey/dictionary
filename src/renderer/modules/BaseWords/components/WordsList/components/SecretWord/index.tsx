import { FC, useState } from 'react';
import { Badge, Button, Checkbox, Typography } from 'antd';

import { Tile } from 'renderer/collaborative/components/ui/Tile';
import { AlignCenterOutlined } from '@ant-design/icons';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import css from './styles.module.css';

type Props = {
  id: number;
  ru: string;
  eng: string;
  isDeleteMode: boolean;
  hasEngSecret?: boolean;
  onSelect: (data: Record<number, boolean>) => void;
};

export const SecretWord: FC<Props> = ({
  id,
  ru,
  eng,
  hasEngSecret = true,
  isDeleteMode = false,
  onSelect,
}) => {
  const [showSecret, setShowSecret] = useState(false);

  const handleToggleSecret = () => {
    setShowSecret(!showSecret);
  };

  const handleChangeDelete = (e: CheckboxChangeEvent) => {
    onSelect({ [id]: e.target.checked });
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
        {isDeleteMode && <Checkbox onChange={handleChangeDelete} />}

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
          <Button onClick={handleToggleSecret} icon={<AlignCenterOutlined />} />
        </div>
      </div>
    </Tile>
  );
};
