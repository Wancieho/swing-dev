import React, { lazy, Suspense } from 'react';

const LazyUsersDisplay = lazy(() => import('./UsersDisplay'));

const UsersDisplay = props => (
  <Suspense fallback={null}>
    <LazyUsersDisplay {...props} />
  </Suspense>
);

export default UsersDisplay;
