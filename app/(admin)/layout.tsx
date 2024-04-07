"use client"
import {
  ProductOutlined,
  CrownFilled,
  BugOutlined,
  LogoutOutlined,
  ShopOutlined,
  LoadingOutlined
} from '@ant-design/icons';
import Link from 'next/link'
import { ConfigProvider, Dropdown, Button } from 'antd';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/auth';
import viVN from 'antd/lib/locale/vi_VN';
import { PageLoading, ProLayout } from '@ant-design/pro-components'

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname()
  const router = useRouter()
  const { user, logout } = useAuth({ middleware: 'auth' })

  if (!user) {
    return <PageLoading />
  }

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
        actionsRender={(props) => {
          if (props.isMobile) return [];
          if (typeof window === 'undefined') return [];
          return [
            <Button icon={<ShopOutlined />} key="pos" type='text' onClick={() => router.push('/pos')}>Bán hàng </Button>
          ];
        }}
        location={{
          pathname: '/products',
        }}
        splitMenus
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          size: 'small',
          title: user.name,
          render: (_, dom) => {
            return (
              <Dropdown
                menu={{
                  items: [
                    {
                      key: 'logout',
                      icon: <LogoutOutlined />,
                      label: 'Đăng xuất',
                      onClick: logout
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
        title="Store"
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