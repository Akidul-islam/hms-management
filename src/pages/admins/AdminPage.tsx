import * as React from 'react';
import Layout from '../../layout/Layout';
import { Outlet } from 'react-router-dom';

const AdminPage: React.FC = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
export default AdminPage;
