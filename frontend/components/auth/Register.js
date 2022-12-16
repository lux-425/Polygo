import React from 'react';

const Register = () => {
  return (
    <>
      <p className='title'>Register</p>
      <div className='wrapper form'>
        <div className='wrapper input'>
          <input placeholder='new pseudo'></input>
        </div>
        <div className='wrapper input'>
          <input placeholder='new password'></input>
        </div>
      </div>
    </>
  );
};

export default Register;
