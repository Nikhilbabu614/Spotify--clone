import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useDatatLayerValue } from './DataLayer';


function Header() {

    const [{user},dispatch] = useDatatLayerValue();

    return (
        <div className="header">
            <div className="left">
                <SearchIcon/>
                <input type="text" placeholder="Search for an Album ,Artist" />
            </div>
            <div className="right">
                <h4>{user?.display_name}</h4>
                <Avatar  src={user?.images[0]?.url}/>
            </div>
        </div>
    )
}

export default Header
