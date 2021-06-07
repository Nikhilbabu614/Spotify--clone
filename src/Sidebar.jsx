import React from 'react';
import { useDatatLayerValue } from './DataLayer';
import Option from './Option';
import './Sidebar.css';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

function Sidebar() {

    const [{playlists},dispatch] = useDatatLayerValue();

    console.log("play ------------" , playlists);

    return (
        <div className="sidebar">
            <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="" />
            <Option title="Home" Icon={HomeOutlinedIcon}/>
            <Option title="Search" Icon={SearchOutlinedIcon}/>
            <Option title="Library" Icon={LibraryMusicOutlinedIcon}/>
            <br />
            <hr />

            <Option title="Hiphop"/>
            {playlists?.items?.map((playlist) =>(<Option title={playlist.name}/>))}

        </div>
    )
}

export default Sidebar
