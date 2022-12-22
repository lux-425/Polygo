import { useContext } from 'react';

import Image from 'next/image';
import logoutBtnLogo from '/public/logoutBtn.png';

import AuthContext from '../../context/AuthContext';

import { toast } from 'react-toastify';

const Footer = ({ openMenu }) => {
  const { logout } = useContext(AuthContext);

  const clickHandler = () => {
    try {
      logout();
    } catch (error) {
      toast.dark(error, { type: 'error' });
    }
  };
  return (
    <div id='footer'>
      {openMenu && (
        <button onClick={clickHandler} id='logoutBtn'>
          <Image width={25} height={25} src={logoutBtnLogo} alt='Logout' />
        </button>
      )}
      <a href='https://github.com/lux-425/Polygo' id='version'>
        Version_0.1 | 2022-12-22
      </a>
    </div>
  );
};

export default Footer;
