import React, { lazy, Suspense } from 'react';

const LazyUserManage = lazy(() => import('./UserManage'));

const UserManage = props => (
  <Suspense fallback={null}>
    <LazyUserManage {...props} />
  </Suspense>
);

export default UserManage;
