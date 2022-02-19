import React from 'react';
import Body from './Body';
import Footer from './Footer';
import "./Player.css";
import Siderbar from './Siderbar';

function Player({spotify}) {
  return (
    <div className='player'>
      <div className='player__body'>
        <Siderbar />
        <Body/>
      </div>
        <Footer />
    </div>
  )
}

export default Player