import React from 'react';
import Body from './Body';
import Footer from './Footer';
import './Player.css';
import Sidebar from './Sidebar';

function Player({spotify}) {
    return (
        <div className="player">
            <div className="playerbody">
                <Sidebar/>
                <Body spotify={spotify}/>
            </div>
            <Footer/>
        </div>
    )
}

export default Player;
