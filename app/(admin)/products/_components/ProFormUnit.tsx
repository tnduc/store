import { ProForm, ProFormCheckbox, ProFormDependency, ProFormDigit, ProFormList, ProFormMoney, ProFormSelect, ProFormText } from "@ant-design/pro-components";
import { Divider, Space, Input, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useRef, useState } from "react";
import type { InputRef } from 'antd';

const ProFormUnit = () => {
  const [units, setUnits] = useState([]);

  const [name, setName] = useState('');
  const inputRef = useRef<InputRef>(null);

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const addItem = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    setUnits([]);
    setName('');
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  return (<>
    <ProFormCheckbox.Group name="unit" layout='horizontal' options={[{
      label: "Biến thể có nhiều đơn vị tính (ví dụ: lon, lốc, thùng...)",
      value: true
    }]} />

    <ProFormDependency name={['unit']}>
      {({ unit }) => {
        if (unit && !unit[0]) {
          return <></>;
        }

        return (<>
          <ProFormSelect name={["units", "unit"]} label="Đơn vị cơ bản" tooltip="Đơn vị nhỏ nhất của sản phẩm như lon, hộp..."
            colProps={{ md: 8 }}
            rules={[{ required: true, message: '' }]}
            required={false}
            showSearch
            fieldProps={{
              dropdownRender: (menu) => (
                <>
                  {menu}
                  <Divider style={{ margin: '8px 0' }} />
                  <Space style={{ padding: '0 8px 4px' }}>
                    <Input
                      placeholder="Thêm đơn vị mới"
                      ref={inputRef}
                      value={name}
                      onChange={onNameChange}
                      onKeyDown={(e) => e.stopPropagation()}
                    />
                    <Button type="text" icon={<PlusOutlined />} onClick={addItem} />
                  </Space>
                </>
              )
            }}
          />
          <ProFormList
            name={['units']}
            alwaysShowItemLabel
          >
            <ProForm.Group key="group" grid>
              <ProFormText name="unit" label="Đơn vị quy đổi" colProps={{ md: 6 }}
                rules={[{ required: true, message: '' }]}
                required={false} />
              <ProFormDigit name="quantity" label="Số lượng" tooltip="Số lượng quy đổi so với đơn vị cơ bản" colProps={{ md: 4 }}
                rules={[{ required: true, message: '' }]}
                required={false} />
              <ProFormMoney name="wholesale" label="Giá đại lý" colProps={{ md: 4 }}
                rules={[{ required: true, message: '' }]}
                required={false} />
              <ProFormMoney name="retail" label="Giá bán lẻ" colProps={{ md: 4 }}
                rules={[{ required: true, message: '' }]}
                required={false} />
              {/* <ProFormText name="sku" label="SKU" colProps={{ md: 6 }}
                                rules={[{ required: true, message: '' }]}
                                required={false}
                            /> */}
              <ProFormText name="barcode" label="Barcode" colProps={{ md: 6 }}
                rules={[{ required: true, message: '' }]}
                required={false} />
            </ProForm.Group>
          </ProFormList>
        </>)
      }}
    </ProFormDependency>
  </>)
}

export default ProFormUnit