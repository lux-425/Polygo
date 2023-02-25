import Image from 'next/image';

import userLogoBonsai from '/public/static/userLogoBonsai.png';
import userLogoKatana from '/public/static/userLogoKatana.png';
import userLogoOrigami from '/public/static/userLogoOrigami.png';
import userLogoSakura from '/public/static/userLogoSakura.png';
import userLogoNinja from '/public/static/userLogoNinja.png';

const Settings = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className='modal settings'>
      <button
        className='button croix'
        onClick={() => props.setOpenSettings(false)}
      >
        ╳
      </button>
      <p className='title'>Settings</p>
      <form onSubmit={submitHandler} noValidate>
        <div className='wrapper logoChoice'>
          <Image
            className='userLogoChoice'
            width={64}
            height={64}
            alt='Logo'
            src={userLogoBonsai}
          />
          <Image
            className='userLogoChoice'
            width={64}
            height={64}
            alt='Logo'
            src={userLogoKatana}
          />
          <Image
            className='userLogoChoice'
            width={64}
            height={64}
            alt='Logo'
            src={userLogoOrigami}
          />
          <Image
            className='userLogoChoice'
            width={64}
            height={64}
            alt='Logo'
            src={userLogoSakura}
          />
          <Image
            className='userLogoChoice'
            width={64}
            height={64}
            alt='Logo'
            src={userLogoNinja}
          />
        </div>
      </form>
    </div>
  );
};

export default Settings;
