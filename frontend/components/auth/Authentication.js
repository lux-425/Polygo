import { React, useState } from 'react';

import Login from './Login';
import Register from './Register';

const Authentication = () => {
  const [toggleLogin, settoggleLogin] = useState(true);
  return (
    <>
      <div className='fenetre authentication'>
        {toggleLogin && <Login />}
        {!toggleLogin && <Register />}
        <button className='button authentication switch'>Register</button>
      </div>
    </>
  );
};

export default Authentication;
