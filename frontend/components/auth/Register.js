import React from 'react';

const Register = () => {
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
