import axios from 'axios';

import { useState, useEffect, createContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) {
      retrieveUser();
    }
  }, [user]);

  // Login the user
  const login = async ({ username, password }) => {
    try {
      setLoading(true);
      const res = await axios.post('/api/auth/login', {
        username,
        password,
      });

      if (res.data.success) {
        retrieveUser();
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
      } else if (res.data.username) {
        setLoading(false);
        setError(res.data.username[0]);
      } else {
        setLoading(false);
        setError(
          'Username and password must be alphanumeric, between 3 and 16 characters long.'
        );
      }
    } catch (error) {
      setLoading(false);
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.error)
      );
    }
  };

  // Logout the user
  const logout = async () => {
    try {
      setLoading(true);
      const res = await axios.post('/api/auth/logout');

      if (res.data.success) {
        setLoading(false);
        setIsAuthenticated(false);
        setUser(null);
        // location.reload();
      }
    } catch (error) {
      setLoading(false);
      setIsAuthenticated(false);
      setUser(null);
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.error)
      );
      // location.reload();
    }
  };

  const retrieveUser = async () => {
    try {
      setLoading(true);

      const res = await axios.get('/api/auth/retrieveUser');

      if (res.data.user) {
        setIsAuthenticated(true);
        setUser(res.data.user);
        setLoading(false);
      }
    } catch (error) {
      setUser(null);
      setIsAuthenticated(false);
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.error)
      );
      setLoading(false);
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
        logout,
        retrieveUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
