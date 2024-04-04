"use client"
import {
  ProductOutlined,
  CrownFilled,
  BugOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import Link from 'next/link'
import { ConfigProvider, Dropdown } from 'antd';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/auth';
import viVN from 'antd/lib/locale/vi_VN';
import Loading from './loading';
import { ProLayout } from '@ant-design/pro-components'

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter()
  const { user } = useAuth({ middleware: 'auth' })

  if (!user) {
    return <Loading />
  }

  const pathname = usePathname()

  if (['/login', '/pos'].includes(pathname)) {
    return <ConfigProvider locale={viVN}>{children}</ConfigProvider>
  }

  return (
    <ConfigProvider locale={viVN}>
      <ProLayout
        route={{
          children: [
            {
              path: '/products',
              name: 'Sản phẩm',
              icon: <ProductOutlined />,
              key: "products",
              routes: [
                {
                  path: '/products',
                  name: 'Danh sách',
                  icon: <CrownFilled />,
                  key: "list"
                },
                {
                  path: '/attributes',
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
          render: (_, dom) => {
            return (
              <Dropdown
                menu={{
                  items: [
                    {
                      key: 'logout',
                      icon: <LogoutOutlined />,
                      label: 'Đăng xuất',
                    },
                  ],
                }}
              >
                {dom}
              </Dropdown>
            );
          }
        }}
        menuItemRender={(item: any, dom) => (
          <Link href={item.path}>{dom}</Link>
        )}
        title="Store version 1"
        logo={<BugOutlined />}
        layout="top"
        fixedHeader
        contentWidth='Fixed'
        onMenuHeaderClick={() => router.push('/dashboard', { scroll: false })}
      >
        {children}
      </ProLayout>
    </ConfigProvider>
  );
};

export default AdminLayout