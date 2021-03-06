export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri ="http://localhost:3000/";
const clientId =  "a54e54465d0f4034b60b39a699960e06";
 

const scopes = [
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "user-read-currently-playing"
];


export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;


export const getTokenFromResponse = () =>{
    return window.location.hash.substring(1).split('&').reduce((initial,item)=>{
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    },{})
}

