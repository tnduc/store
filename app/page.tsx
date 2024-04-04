import { Result, Button } from 'antd';
import Link from 'next/link';
import { ShopOutlined, SettingOutlined } from '@ant-design/icons';

export default function Home() {
  return (
    <Result extra={[
        <Link href="products" key="product">
          <Button size='large' icon={<SettingOutlined />}>
            Quản lý
          </Button>
        </Link>,
        <Link href="pos" key="pos">
          <Button type="primary" size='large' icon={<ShopOutlined />}>
            Bán Hàng
          </Button>
        </Link>,
      ]}
    />
  );
}
