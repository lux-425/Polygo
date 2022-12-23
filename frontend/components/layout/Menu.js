import { useRef, useEffect, useState } from 'react';

import Settings from '../Settings';

const Menu = () => {
  const [openSettings, setOpenSettings] = useState(false);

  const clickHandler = (button) => {
    switch (button) {
      case 'settings':
        setOpenSettings(true);
        break;
      default:
        setOpenSettings(false);
    }
  };
  return (
    <div id='menu'>
      <div className='wrapper menuButtons'>
        <button onClick={clickHandler} className='button menu'>
          <div className='menuIndicator' />
          Dashboard
        </button>
        <button onClick={clickHandler} className='button menu'>
          <div className='menuIndicator' />
          Kanji
        </button>
        <button
          onClick={clickHandler}
          className='button menu vocabulary'
          disabled
        >
          <div className='menuIndicator' />
          Vocabulary
        </button>
        <button onClick={clickHandler} className='button menu grammar' disabled>
          <div className='menuIndicator' />
          Grammar
        </button>
        <button
          onClick={() => clickHandler('settings')}
          className='button menu'
        >
          <div className='menuIndicator' />
          Settings
        </button>
        <button onClick={clickHandler} className='button menu'>
          <div className='menuIndicator' />
          Achievements
        </button>
      </div>
      {openSettings && <Settings />}
    </div>
  );
};

export default Menu;
