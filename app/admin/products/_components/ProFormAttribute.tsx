import { ProForm, ProFormCheckbox, ProFormDependency, ProFormDigit, ProFormList, ProFormMoney, ProFormSelect, ProFormText } from "@ant-design/pro-components";

const ProFormAttribute = () => {
  return (<>
    <ProFormCheckbox.Group name="attribute" layout='horizontal' options={[{
      label: "Biến thể có nhiều đơn vị tính (ví dụ: lon, lốc, thùng...)",
      value: true
    }]} />
    <ProFormDependency name={['attribute']}>
      {({ attribute }) => {
        if (attribute && !attribute[0]) {
          return <></>;
        }

        return (<>
          <ProFormList
            name={['attributes']}
            alwaysShowItemLabel
          >
            <ProForm.Group key="group" grid>
              <ProFormSelect name="attribute" label="Đơn vị quy đổi" colProps={{ md: 6 }}
                rules={[{ required: true, message: '' }]}
                required={false} />
              <ProFormSelect name="quantity" label="Số lượng" tooltip="Số lượng quy đổi so với đơn vị cơ bản" colProps={{ md: 18 }}
                rules={[{ required: true, message: '' }]}
                required={false} />
            </ProForm.Group>
          </ProFormList>
        </>)
      }}
    </ProFormDependency>
  </>)
}

export default ProFormAttribute