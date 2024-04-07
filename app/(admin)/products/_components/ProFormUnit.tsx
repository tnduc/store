import { ProForm, ProFormCheckbox, ProFormDependency, ProFormDigit, ProFormList, ProFormMoney, ProFormSelect, ProFormText } from "@ant-design/pro-components";
import { Divider, Input } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { useRef, useState } from "react";
import type { InputRef } from 'antd';
import { useProduct } from '@/hooks/product';

const { Search } = Input;

const ProFormUnit = () => {
  const [units, setUnits]: any = useState([]);
  const [name, setName] = useState('');
  const inputRef = useRef<InputRef>(null);
  const { unitSearch, unitStore } = useProduct();

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const addUnit = async (name: string) => {
    await unitStore({ name })

    console.log(inputRef);
    
    // setUnits([...units, name]);
    // setName('');
    // setTimeout(() => {
    //   inputRef.current?.focus();
    // }, 0);

  };

  return (<>
    <ProFormCheckbox.Group name="hasUnit" layout='horizontal' options={[{
      label: "Biến thể có nhiều đơn vị tính (ví dụ: lon, lốc, thùng...)",
      value: true
    }]} />

    <ProFormDependency name={['hasUnit']}>
      {({ hasUnit }) => {
        if (!hasUnit[0]) {
          return
        }

        return (<>
          <ProFormSelect name="unit" label="Đơn vị cơ bản" tooltip="Đơn vị nhỏ nhất của sản phẩm như lon, hộp..."
            colProps={{ md: 8 }}
            rules={[{ required: true, message: '' }]}
            required={false}
            showSearch
            debounceTime={500}
            request={(value) => {
              unitSearch
            }}
            inputRef={inputRef}
            fieldProps={{
              dropdownRender: (menu) => (
                <>
                  {menu}
                  <Divider style={{ margin: '8px 0' }} />
                  <Search placeholder="Thêm đơn vị" enterButton={<SendOutlined />} onSearch={addUnit} />
                </>
              )
            }}
            options={units}
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