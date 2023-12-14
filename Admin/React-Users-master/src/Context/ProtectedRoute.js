// ProtectedRoute.js
import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  const history = useHistory();
  if (!token) {
    // Redirect to the login page if the user is not authenticated
    history.replace("/login");
    return null; // Return null to avoid rendering the children
  }

  // Render the route element if the user is authenticated
  return children;
};

export default ProtectedRoute;
