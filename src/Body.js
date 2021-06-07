import React from 'react';
import './Body.css';
import { useDatatLayerValue } from './DataLayer';
import Header from './Header';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Song from './Song';

function Body({spotify}) {

    const [{discover_weekly},dispatch] = useDatatLayerValue();
    console.log("-->",discover_weekly);

    return (
        <div className="body">
            <Header/>
            <div className="bod">
            <div className="body_info">
                <img src={'https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/n_wLTJQp1LRBe9wfQch8cycgVQAAdD38hAMvuTaNqbodlgTIxNUrvKXpNhEXZpaqIRJgj-lTSLM5NB53O8Bqcr-mDkchEE4dkhKQk7Z2D4dZMM-n7Z71zfeN8Ue67bOnDvmmXj32iddxfNLE6CrgDt94NxJrRVB90_lSyOtCf4dqHnpJLpmNxB9FLmEJoRtzXgrMRTb3PGnGsoApX7mHJQ==/NzE6MTU6MzFUODEtNjAtMQ==' || discover_weekly?.images[0].url} alt="image not available" />
                <div className="text">
                    <strong>PLayList</strong>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="songs">
                <div className="icons">
                    <PlayCircleFilledIcon className="icongreen"/>
                    <FavoriteIcon className="ic"/>
                    <MoreHorizIcon className="ic"/>
                </div>
            </div>
            <div className="li">
            {discover_weekly?.tracks.items.map((item)=>(
                    <Song track={item.track}/>
                ))}
            </div>
            </div>
        </div>
    )
}

export default Body
