import React from 'react';
import './Song.css';

function Song({track}) {
    return (
        <div className="list">
            <img src={track.album.images[0].url} alt="" />
            <div className="inform">
                <h3>{track.name}</h3>
                <p>{track.artists.map((artist)=>artist.name).join(",")}
                {track.album.name}
                </p>
            </div>
        </div>
    )
}

export default Song
