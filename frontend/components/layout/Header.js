import { useContext } from 'react';

import Image from 'next/image';
import userLogo from '/public/katana.png';

import AuthContext from '../../context/AuthContext';

const Header = () => {
  const { user } = useContext(AuthContext);

  if (user) user.level = 5;

  return (
    <div id='header'>
      <a href='/' id='polygo'>
        Polygo
      </a>

      <div className='modal userProfile'>
        <Image id='userLogo' width={33} height={33} alt='Logo' src={userLogo} />
        <span>&nbsp;</span>
        <div>
          {user && user.username}
          <br />
          Level : {user && user.level}
        </div>
      </div>
    </div>
  );
};

export default Header;
