import { React, useState } from 'react';

import Login from './Login';
import Register from './Register';

const Authentication = () => {
  const [toggleLogin, setToggleLogin] = useState(true);
  const [toggleWindow, setToggleWindow] = useState(false);
  return (
    <>
      {!toggleWindow && (
        <button className='button toggleAuth' onClick={()=>setToggleWindow(true)}>
          Start
        </button>
      )}
      {toggleWindow && (
        <div className='fenetre authentication'>
          <button className='button croix' onClick={()=>setToggleWindow(false)}>
            X
          </button>
          {toggleLogin && <Login />}
          {!toggleLogin && <Register />}
          <button className='button authentication switch'>Register</button>
        </div>
      )}
    </>
  );
};

export default Authentication;
