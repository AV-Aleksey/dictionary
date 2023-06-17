import React, { useRef, useState } from 'react';
import { Button, Table, TablePaginationConfig } from 'antd';

import { ColumnsType, TableRowSelection } from 'antd/es/table/interface';
import { Word } from 'renderer/collaborative/types';
import { TableProps } from 'antd/es/table/InternalTable';
import { observer } from 'mobx-react';
import { DeleteOutlined } from '@ant-design/icons';
import { toJS } from 'mobx';
import { wordStore } from '../../../../collaborative/stores/wordsStore';
import { Space } from '../../../../collaborative/components/ui/Space';

interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: string;
  filters?: Record<string, any>;
}

export const WordsTable = observer(() => {
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 5,
    },
  });
  const selectedItems = useRef<number[]>([]);

  const handleSelect = (ids: number[]) => {
    selectedItems.current = ids;
  };

  const handleDelete = () => {
    try {
      if (selectedItems.current.length) {
        wordStore.control.deleteWords(selectedItems.current);
        selectedItems.current = [];
      }
    } catch (e) {
      console.log('ошибка', e);
    }
  };

  const columns: ColumnsType<Word> = [
    {
      title: '№',
      dataIndex: 'id',
      width: '10%',
    },
    {
      title: 'Слово ENG',
      dataIndex: 'eng',
      filterSearch: true,
    },
    {
      title: 'Слово RU',
      dataIndex: 'ru',
    },
    {
      title: 'Теги',
      dataIndex: 'tags',
    },
  ];

  const handleTableChange: TableProps<Word>['onChange'] = (
    pagination,
    filters,
    sorter
  ) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });
  };

  const rowSelection: TableRowSelection<Word> = {
    hideSelectAll: true,
    onSelect: (record, selected, selectedRows) => {
      const ids = selectedRows.filter(Boolean).map(({ id }) => id);
      handleSelect(ids);
    },
  };

  return (
    <Space block direction="vertical">
      <Button onClick={handleDelete} icon={<DeleteOutlined />} />
      <Table
        columns={columns}
        dataSource={toJS(wordStore.words)}
        pagination={tableParams.pagination}
        rowKey={(record) => record.id}
        rowSelection={rowSelection}
        onChange={handleTableChange}
      />
    </Space>
  );
});
