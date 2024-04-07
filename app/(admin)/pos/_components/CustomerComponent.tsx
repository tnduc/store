'use client'
import { useRef, useState } from 'react';
import { ProFormSelect } from '@ant-design/pro-components';
import { SearchOutlined } from '@ant-design/icons'


const CustomerComponent = () => {
  return (
    <ProFormSelect
      name="select"
      label="Select"
      options={[
        { label: '全部', value: 'all' },
        { label: '未解决', value: 'open' },
        { label: '已解决', value: 'closed' },
        { label: '解决中', value: 'processing' },
      ]}
      fieldProps={{
        optionItemRender(item: any) {
          return item.label + ' - ' + item.value;
        },
      }}
      placeholder="Tìm khách hàng"
      showSearch
      noStyle
      width={'lg'}
    />
  );
};

export default CustomerComponent;