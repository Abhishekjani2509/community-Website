// ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({children}) => {
  const { token } = useAuth();

  if (!token) {
    // Redirect to the login page if the user is not authenticated
    return <Navigate to="/login" />;
  }

  // Render the route element if the user is authenticated
  return children;
};

export default ProtectedRoute;
