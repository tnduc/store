"use client"
import { PageContainer } from '@ant-design/pro-components';
import ProSkeleton from '@ant-design/pro-skeleton';

const Loading = () => (
  <PageContainer contentWidth='Fixed' title={false}>
    <ProSkeleton type="list" />
  </PageContainer>
);

export default Loading