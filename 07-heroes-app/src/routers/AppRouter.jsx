import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// Components
import LoginScreen from '../components/auth/LoginScreen';
import DashboardRoutes from './DashboardRoutes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/login' element={<LoginScreen />} /> */}

        <Route
          path='/login'
          element={
            <PublicRoute>
              <LoginScreen />
            </PublicRoute>
          }
        />

        <Route
          path='/*'
          element={
            <PrivateRoute>
              <DashboardRoutes />
            </PrivateRoute>
          }
        />

        {/* <Route path='/*' element={<DashboardRoutes />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
