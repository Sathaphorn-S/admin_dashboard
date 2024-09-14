import React from 'react';
import { Navigate } from 'react-router-dom';

interface AppRouteProps {
  isAuthenticated: boolean;
  children: React.ReactNode;
}

const AppRoute = ({ isAuthenticated, children }: AppRouteProps) => {
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default AppRoute;
