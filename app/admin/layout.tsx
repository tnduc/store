"use client"
import {
  ProductOutlined,
  CrownFilled,
  BugOutlined
} from '@ant-design/icons';
import Link from 'next/link'
import dynamic from 'next/dynamic';
import { ConfigProvider } from 'antd';
import viVN from 'antd/lib/locale/vi_VN';

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const ProLayout = dynamic(
    () => import("@ant-design/pro-components").then((com) => com.ProLayout), { ssr: false }
  );

  return (
    <ConfigProvider locale={viVN}>
      <ProLayout
        route={{
          path: '/admin',
          name: 'Admin',
          icon: <CrownFilled />,
          key: "admin",
          children: [
            {
              path: '/admin/products',
              name: 'Sản phẩm',
              icon: <ProductOutlined />,
              key: "products",
              routes: [
                {
                  path: '/admin/products/list',
                  name: 'Danh sách',
                  icon: <CrownFilled />,
                  key: "list"
                },
                {
                  path: '/admin/attributes',
                  name: 'Thuộc tính',
                  icon: <CrownFilled />,
                },
              ]
            },
          ],
        }}
        location={{
          pathname: '/admin',
        }}
        splitMenus
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          size: 'small',
          title: 'Administrator',
        }}
        menuItemRender={(item: any, dom) => (
          <Link href={item.path}>{dom}</Link>
        )}
        title="Store version 1"
        logo={<BugOutlined />}
        layout="top"
        fixedHeader
        contentWidth='Fixed'
      >
        {children}
      </ProLayout>
    </ConfigProvider>
  );
};

export default AdminLayout