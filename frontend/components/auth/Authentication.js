import { React, useState } from 'react';

import Login from './Login';
import Register from './Register';

const Authentication = () => {
  const [toggleLogin, setToggleLogin] = useState(true);
  const [toggleWindow, setToggleWindow] = useState(false);
  return (
    <>
      {!toggleWindow && (
        <button
          className='button toggleAuth'
          onClick={() => setToggleWindow(true)}
        >
          Start
          <span className='line-1' />
          <span className='line-2' />
          <span className='line-3' />
          <span className='line-4' />
        </button>
      )}
      {toggleWindow && (
        <div className='modal authentication'>
          <button
            className='button croix'
            onClick={() => setToggleWindow(false)}
          >
            ╳
          </button>
          {toggleLogin && <Login />}
          {!toggleLogin && <Register />}
          <button
            onClick={() => {
              setToggleLogin(!toggleLogin);
            }}
            className='button authentication switch'
          >
            {(toggleLogin && 'Register') || 'Login'}
          </button>
        </div>
      )}
    </>
  );
};

export default Authentication;
