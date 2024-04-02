"use client"
import { PageContainer } from '@ant-design/pro-components';
import ProSkeleton from '@ant-design/pro-skeleton';

const Dashboard = () => (
  <PageContainer contentWidth='Fixed' title={false}>
    <ProSkeleton type="list" active />
  </PageContainer>
);

export default Dashboard