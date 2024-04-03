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
import { Tabs, Alert } from 'antd';

const Page = () => {
	const [errors, setErrors] = useState([])
	const [status, setStatus]: any = useState(null)
	const [loading, setLoading]: any = useState(false)

	const router: any = useRouter()
	const { login } = useAuth({
		middleware: 'guest',
		redirectIfAuthenticated: '/products',
	})

	useEffect(() => {
		if (router.reset?.length > 0 && errors.length === 0) {
			setStatus(atob(router.reset))
		} else {
			setStatus(null)
		}
	})

	const onFinish = async ({ email, password, remember }: any) => {
		setLoading(true)
		await login({
			email,
			password,
			remember,
			setErrors,
			setStatus,
		})
		setLoading(false)
	}

	console.log(errors);

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
				onFinish={onFinish}
				initialValues={{
					remember: false
				}}
				loading={loading}
			>
				<Tabs centered activeKey="account" items={[{
					label: 'Thông tin đăng nhập',
					key: 'account'
				}]} />
				<>
					{errors.length > 0 && <Alert message={errors} type="error" style={{ marginBottom: 16 }} />}
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
					<ProFormCheckbox noStyle name="remember">
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