import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Metadata } from 'next';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Store',
    default: 'Store',
  },
};

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body>
      <AntdRegistry>{children}</AntdRegistry>
    </body>
  </html>
);

export default RootLayout;