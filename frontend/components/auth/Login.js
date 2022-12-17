import React from 'react'

const Login = () => {
  return (
    <>
      <p className='title'>Login</p>
      <div className='wrapper form'>
        <div className='wrapper input'>
          <input placeholder='username'></input>
        </div>
        <div className='wrapper input'>
          <input type='password' placeholder='password'></input>
        </div>
      </div>
      <button className='button authentication ok'>OK</button>
    </>
  );
}

export default Login