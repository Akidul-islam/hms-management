import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterForm from './pages/AuthPage/RegisterForm';
import PageNotFound from './pages/PageNotFound';
import UnAuthorized from './pages/UnAuthorized';
import { router } from './staticData/navigation';
import PrivateRoute from './containers/auth/PrivateRoutes';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='register' element={<RegisterForm />} />
        {router.map((route, index) => (
          <Route
            key={index}
            element={<PrivateRoute role={route.role} allow='admin' />}
          >
            <Route path={route.parent} element={<route.component />}>
              {route.child &&
                route.child.map((item) => (
                  <Route
                    key={item.id}
                    path={item.path}
                    element={<item.component />}
                    index={item.index}
                  />
                ))}
            </Route>
          </Route>
        ))}
        <Route path='*' element={<PageNotFound />} />
        <Route path='/unthorized' element={<UnAuthorized />} />
      </Routes>
    </>
  );
};

export default App;
