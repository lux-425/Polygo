import React, { useState, useEffect, useContext } from 'react';

import { toast } from 'react-toastify';

import AuthContext from '../../context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { loading, error, clearErrors, login } = useContext(AuthContext);

  useEffect(() => {
    if (error) {
      toast.dark(error, { type: 'error' });
      clearErrors();
    }
  }, [error, clearErrors]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (username && password) login({ username, password });
  };
  return (
    <>
      <p className='title'>{loading ? 'Loading...' : 'Login'}</p>
      <div className='wrapper login'>
        <form onSubmit={submitHandler} noValidate>
          <div className='wrapper input'>
            <input
              type='text'
              pattern='\w{3,12}'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='username'
              required
            ></input>
          </div>
          <div className='wrapper input'>
            <input
              type='password'
              pattern='\w{3,12}'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='password'
              required
            ></input>
          </div>
          <button type='submit' className='button authentication ok'>
            OK
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
