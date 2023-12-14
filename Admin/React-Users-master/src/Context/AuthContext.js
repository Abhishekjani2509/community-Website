// AuthContext.js
import React from 'react';
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('jwtToken') || '');

  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem('jwtToken', newToken);
    // console.log(newToken);
    
  };

  const logout = () => {
    setToken('');
    localStorage.removeItem('jwtToken');
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('jwtToken');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
