import { useRef, useEffect, useState } from 'react';

const Menu = () => {
  const clickHandler = ()=>{
    console.log('clicked');
  }
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
        <button onClick={clickHandler} className='button menu' disabled>
          <div className='menuIndicator' />
          Vocabulary
        </button>
        <button onClick={clickHandler} className='button menu' disabled>
          <div className='menuIndicator' />
          Grammar
        </button>
        <button onClick={clickHandler} className='button menu'>
          <div className='menuIndicator' />
          Settings
        </button>
      </div>
    </div>
  );
};

export default Menu;
