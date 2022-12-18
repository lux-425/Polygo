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
        (error.response &&
          (error.response.data.detail || error.response.data.error))
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
        user,
        error,
        clearErrors,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
