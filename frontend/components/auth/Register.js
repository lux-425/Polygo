import React, { useState, useEffect, useContext } from 'react';

import { toast } from 'react-toastify';

import AuthContext from '../../context/AuthContext';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { loading, error, clearErrors, register } = useContext(AuthContext);

  useEffect(() => {
    if (error) {
      toast.dark(error, { type: 'error' });
      clearErrors();
    }
  }, [error, clearErrors]);
  return (
    <>
      <p className='title'>Register</p>
      <div className='wrapper form'>
        <div className='wrapper input'>
          <input placeholder='new username'></input>
        </div>
        <div className='wrapper input'>
          <input type='password' placeholder='new password'></input>
        </div>
      </div>
      <button className='button authentication ok'>OK</button>
    </>
  );
};

export default Register;
