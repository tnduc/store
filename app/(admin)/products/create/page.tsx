"use client"
import UploadImage from '@/components/UploadImage';
import {
  FooterToolbar,
  PageContainer,
  ProCard,
  ProForm,
  ProFormCheckbox,
  ProFormDigit,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { Col, Space } from 'antd';
import ProFormUnit from '../_components/ProFormUnit'
import ProFormAttribute from '../_components/ProFormAttribute';

const CreateProduct = () => {
  return (
    <PageContainer title="Thêm sản phẩm mới">
      <ProForm
        submitter={{
          render: (_, dom) => <FooterToolbar>{dom}</FooterToolbar>,
        }}
        onFinish={async (values) => console.log(values)}
        // size='large'
        grid
        rowProps={{ gutter: 16 }}
        initialValues={{
          unit: [],
          attribute: [],
        }}
      >
        <Col md={18} xs={24}>
          <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <ProCard>
              <ProFormText
                name="name"
                label="Tên sản phẩm"
                rules={[{ required: true, message: '' }]}
                required={false}
              />
              <ProFormTextArea label="Mô tả" name="description" />
            </ProCard>
            <ProCard title="Hình ảnh">
              <UploadImage />
            </ProCard>
            <ProCard title="Giá sản phẩm">
              <ProForm.Group>
                <ProFormDigit
                  name="wholesale"
                  label="Giá đại lý"
                  rules={[{ required: true, message: '' }]}
                  required={false}
                  colProps={{ md: 12 }}
                />
                <ProFormDigit
                  name="retail"
                  label="Giá bán lẻ"
                  rules={[{ required: true, message: '' }]}
                  required={false}
                  colProps={{ md: 12 }}
                />
              </ProForm.Group>
            </ProCard>
            <ProCard title="Quản lý tồn kho">
              <ProForm.Group>
                <ProFormDigit
                  name="sku"
                  label="SKU"
                  rules={[{ required: true, message: '' }]}
                  required={false}
                  tooltip="SKU - Mã sản phẩm cho mỗi sản phẩm nên là duy nhất, và bao gồm cả chữ và số"
                  colProps={{ md: 12 }}
                />
                <ProFormDigit
                  name="barcode"
                  label="Barcode"
                  rules={[{ required: true, message: '' }]}
                  required={false}
                  tooltip="Barcode - Mã vạch thường được Nhà sản xuất tạo ra"
                  colProps={{ md: 12 }}
                />
              </ProForm.Group>
            </ProCard>
            <ProCard title="Đơn vị tính">
              <ProFormUnit />
            </ProCard>
            <ProCard title="Thuộc tính">
              <ProFormAttribute />
            </ProCard>
          </Space>
        </Col>
        <br />
        <Col md={6} xs={24}>
          <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <ProCard title="Trạng thái" >
              <ProFormCheckbox.Group
                name="status"
                options={[{
                  label: "Cho phép bán",
                  value: true
                }]}
              />
            </ProCard>
            <ProCard title="Thông tin bổ sung">
              <ProFormSelect
                name="brand"
                label="Nhà cung cấp"
              />
              <ProFormSelect
                name="category"
                label="Loại sản phẩm"
              />
            </ProCard>
          </Space>
        </Col>
      </ProForm>
    </PageContainer >
  );
};

export default CreateProduct