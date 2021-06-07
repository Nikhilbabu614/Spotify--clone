import { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromResponse } from './spotify';
import spotifyApi from 'spotify-web-api-js';
import { useDatatLayerValue } from './DataLayer';
import Player from './Player';



const spotify = new spotifyApi();


function App() {

  const [{user ,token ,discover_weekly},dispatch] = useDatatLayerValue();

  useEffect(()=>{
    const hash = getTokenFromResponse();
    window.location.hash="";
    const _token = hash.access_token;

    if(_token){
      dispatch({
        type:"SET_TOKEN",
        token:_token
      })

      spotify.setAccessToken(_token);  //giving token to api
      spotify.getMe().then(user => {
        dispatch({
          type:"SET_USER",
          user:user
        });
      });

      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type:"SET_PLAYLIST",
          playlists:playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcWc1NNxQUPBD").then(response=>{
        dispatch({
          type:"SET_DISCOVER_WEEKLY",
          discover_weekly:response,
        }); 
      });

    }

  },[])

  console.log("this username i " , user);
  console.log("weekly --- >",discover_weekly);

  return (
    <div className="App">
      {token ? <Player spotify={spotify}/> : <Login/>}
    </div>
  );
}

export default App;
