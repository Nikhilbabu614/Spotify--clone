import React from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistAddOutlinedIcon from '@material-ui/icons/PlaylistAddOutlined';
import VolumeUpOutlinedIcon from '@material-ui/icons/VolumeUpOutlined';

function Footer() {
    return (
            <div className="footer">
                <div className="footer_left">
                    <img src="https://pbs.twimg.com/media/ENHK08SUEAEdnAx.jpg" alt="" />
                    <div className="info">
                        <h5>Vaathi Coming</h5>
                        <p>Anirudh Ravichander , Gana Balachandar</p>
                    </div>
                </div>
                <div className="footer_center">
                    <ShuffleIcon className="icon_green"/>
                    <SkipPreviousIcon/>
                    <PlayCircleOutlineIcon className="centericon"/>
                    <SkipNextIcon/>
                    <RepeatIcon  className="icon_green" />
                </div>
                <div className="footer_right">
                    <PlaylistAddOutlinedIcon/>
                    <VolumeUpOutlinedIcon/>
                    <hr />
                </div>
            </div>
            )
}

export default Footer
