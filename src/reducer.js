export const initialstate = {
    user:null,
    playlists :[],
    playing:false,
    item:null,
    // token:null
    // token:"BQD1wn-jJHK04y3BMMjPntrgUBsxNcwi6ODWtAciibF3yoape5ydKlbs1J1OSKr3mV0FeUNQncJoHHOBQrPdz-OygFj4wbJWVW9J_k1OC6kfb_mWgXQoB_HQQTPuojwUMKxEdGOgUIJZANUbvrit2ferC-VGO7LCYotxkQ3Q0JrnBJ003CB4"
};

const reducer = (state,action)=>{
    console.log(action);

    switch (action.type) {
        case "SET_USER":
                return {
                    ...state , 
                    user:action.user    
                };

        case "SET_TOKEN":
            return {
                ...state ,
                token:action.token
            };

        case "SET_PLAYLIST":
            return {
                ...state ,
                playlists : action.playlists
            };

        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly : action.discover_weekly,
            };
              
        default:
            return state;
    }

};

export default reducer;