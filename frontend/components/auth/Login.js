import React from 'react'

const Login = () => {
  return (
    <>
      <p className='title'>Login</p>
      <div className='wrapper form'>
        <div className='wrapper input'>
          <input placeholder='pseudo'></input>
        </div>
        <div className='wrapper input'>
          <input placeholder='password'></input>
        </div>
      </div>
    </>
  );
}

export default Login