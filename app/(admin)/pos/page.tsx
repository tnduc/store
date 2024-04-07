'use client'
import { ProCard } from '@ant-design/pro-components';
import { useRef, useState } from 'react';
import { Input, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons'
import CustomerComponent from './_components/CustomerComponent';

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

const { Search } = Input;

const initialItems = [
  {
    label: 'Đơn 1',
    children: 'Content of Tab 3',
    key: '1',
    closable: false,
  },
];

const POS = () => {
  const [activeKey, setActiveKey] = useState(initialItems[0].key);
  const [items, setItems] = useState(initialItems);
  const newTabIndex = useRef(2);

  const onChange = (newActiveKey: string) => {
    setActiveKey(newActiveKey);
  };

  const add = () => {
    const increment = newTabIndex.current++;
    const newActiveKey = `order-${increment}`;
    const newPanes = [...items];
    newPanes.push({
      label: `Đơn ${increment}`, children: newActiveKey, key: newActiveKey,
      closable: true
    });
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const remove = (targetKey: TargetKey) => {
    let newActiveKey = activeKey;
    let lastIndex = -1;
    items.forEach((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = items.filter((item) => item.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const onEdit = (
    targetKey: React.MouseEvent | React.KeyboardEvent | string,
    action: 'add' | 'remove',
  ) => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey);
    }
  };

  return (
    <ProCard split="vertical">
      <ProCard
        tabs={{
          type: "editable-card",
          onChange,
          activeKey,
          onEdit,
          items,
        }}
      >
        左侧内容
      </ProCard>
      <ProCard
        title={false}
        colSpan="20%"
        headerBordered
      >
        <CustomerComponent />
      </ProCard>
    </ProCard>
  );
};

export default POS;