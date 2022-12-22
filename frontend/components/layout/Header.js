import { useContext } from 'react';

import Image from 'next/image';
import userLogo from '/public/userLogo.png';
import logoutLogo from '/public/logoutLogo.png';

import AuthContext from '../../context/AuthContext';

const Header = ({ openMenu }) => {
  const { user, logout } = useContext(AuthContext);

  const clickHandler = () => {
    try {
      logout();
    } catch (error) {
      toast.dark(error, { type: 'error' });
    }
  };

  if (user) user.level = 1;

  return (
    <div id='header'>
      <a href='/' id='polygo'>
        Polygo
      </a>

      {openMenu && (
        <div className='modal userProfile'>
          <Image
            id='userLogo'
            width={55}
            height={55}
            alt='Logo'
            src={userLogo}
          />
          <span>&nbsp;</span>
          <div>
            {user && user.username}
            <br />
            LEVEL {user && user.level}
          </div>
          <button onClick={clickHandler} id='logoutBtn'>
            <Image width={33} height={33} src={logoutLogo} alt='Logout' />
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
