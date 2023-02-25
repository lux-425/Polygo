import { useContext } from 'react';

import Image from 'next/image';
import logoutLogo from '/public/static/logoutLogo.png';
import userLogoBonsai from '/public/static/userLogoBonsai.png';
import userLogoKatana from '/public/static/userLogoKatana.png';
import userLogoOrigami from '/public/static/userLogoOrigami.png';
import userLogoSakura from '/public/static/userLogoSakura.png';
import userLogoNinja from '/public/static/userLogoNinja.png';

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

  let userLogoSrc = null;
  if (user) {
    // TEST
    user.level = 1;
    user.logo = 'Origami';

    switch (user.logo) {
      case 'Bonsai':
        userLogoSrc = userLogoBonsai;
        break;
      case 'Katana':
        userLogoSrc = userLogoKatana;
        break;
      case 'Origami':
        userLogoSrc = userLogoOrigami;
        break;
      case 'Sakura':
        userLogoSrc = userLogoSakura;
        break;
      case 'Ninja':
        userLogoSrc = userLogoNinja;
        break;
      default:
        userLogoSrc = userLogoKatana;
    }
  }

  return (
    <div id='header'>
      <a href='/' id='polygo'>
        Polygo
      </a>

      {openMenu && userLogoSrc && (
        <div className='modal userProfile'>
          <Image
            id='userLogo'
            width={64}
            height={64}
            alt='Logo'
            src={userLogoSrc}
          />
          <span id='xpBarBackground'>&nbsp;</span>
          <span id='xpBar'>&nbsp;</span>
          <div>
            {user && user.username}
            <br />
            <span style={{ color: 'rgb(255, 145, 0)' }}>
              LEVEL {user && user.level}
            </span>
          </div>
          <button onClick={clickHandler} id='logoutBtn'>
            <Image
              width={64}
              height={64}
              src={logoutLogo}
              alt='Logout'
              id='logoutLogo'
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
