'use client'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
	LockOutlined,
	UserOutlined,
} from '@ant-design/icons';
import {
	LoginFormPage,
	ProConfigProvider,
	ProFormCheckbox,
	ProFormText,
} from '@ant-design/pro-components';
import { Tabs, theme } from 'antd';

const Page = () => {

	// const { login } = useAuth({
	// 	middleware: 'guest',
	// 	redirectIfAuthenticated: '/admin',
	// })


	const onSubmit = (values: any) => {

		console.log(values);

		// login({
		// 	email,
		// 	password,
		// 	remember: shouldRemember,
		// 	setErrors,
		// 	setStatus,
		// })
	}

	return (
		<div
			style={{
				backgroundColor: 'white',
				height: '100vh',
			}}
		>
			<LoginFormPage
				backgroundImageUrl="https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*y0ZTS6WLwvgAAAAAAAAAAAAADml6AQ/fmt.webp"
				logo="https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg"
				backgroundVideoUrl="https://gw.alipayobjects.com/v/huamei_gcee1x/afts/video/jXRBRK_VAwoAAAAAAAAAAAAAK4eUAQBr"
				title="Store"
				containerStyle={{
					backgroundColor: 'rgba(0, 0, 0,0.65)',
					backdropFilter: 'blur(4px)',
				}}
				subTitle="Hệ thống quản lý bán hàng"
			>
				<Tabs centered activeKey="account" items={[{
					label: 'Thông tin đăng nhập',
					key: 'account'
				}]} />
				<>
					<ProFormText
						name="email"
						fieldProps={{
							size: 'large',
							prefix: (
								<UserOutlined style={{ marginRight: '10px' }} />
							),
						}}
						placeholder={'Địa chỉ email'}
						rules={[
							{
								required: true,
								message: '',
							},
						]}
					/>
					<ProFormText.Password
						name="password"
						fieldProps={{
							size: 'large',
							prefix: (
								<LockOutlined style={{ marginRight: '10px' }} />
							),
						}}
						placeholder={'Mật khẩu'}
						rules={[
							{
								required: true,
								message: '',
							},
						]}
					/>
				</>
				<div
					style={{
						marginBlockEnd: 24,
					}}
				>
					<ProFormCheckbox noStyle name="autoLogin">
						Ghi nhớ
					</ProFormCheckbox>
				</div>
			</LoginFormPage>
		</div>
	);
};

const Login = () => {
	return (
		<ProConfigProvider dark>
			<Page />
		</ProConfigProvider>
	)
}

export default Login