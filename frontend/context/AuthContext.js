import axios from 'axios';

import { useState, useEffect, createContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null);

  // Login the user
  const login = async ({ username, password }) => {
    try {
      setLoading(true);
      const res = await axios.post('/api/auth/login', {
        username,
        password,
      });

      if (res.data.success) {
        // retrieveUser();
        setIsAuthenticated(true);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.error)
      );
    }
  };

  // Register the new user
  const register = async ({ username, password }) => {
    try {
      setLoading(true);

      const res = await axios.post(`${process.env.API_URL}/api/register/`, {
        username,
        password,
      });

      if (res.data.message) {
        setLoading(false);
        login({ username, password });
      } else if (res.data) {
        setLoading(false);
        setError(
          'Username and password must be alphanumeric, between 3 and 16 characters long.'
        );
      } else {
        setTimeout(() => {
          setLoading(false);
        }, 5555);
      }
    } catch (error) {
      setLoading(false);
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.error)
      );
    }
  };

  // Clear all errors
  const clearErrors = () => {
    setError(null);
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        isAuthenticated,
        setIsAuthenticated,
        user,
        error,
        clearErrors,
        login,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
