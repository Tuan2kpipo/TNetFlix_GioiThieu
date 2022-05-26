import * as Types from '../types';

const reducerInitialState ={
    NetflixOriginals: null,
    Trending: null,
    Toprated: null,
    Action: null,
    Comedy: null,
    Horror: null,
    Romance: null,
    Documentaries: null,
    MovieDetail: null,
    SearchMovies: null,
}

const reducer = (state = reducerInitialState, action )=>{
    const {type, payload} = action

    switch(type){
        case Types.GET_API_ORIGINALS: 
        return {...state, NetflixOriginals: payload}

        case Types.GET_API_TRENDING: 
        return {...state, Trending: payload}

        case Types.GET_API_TOPRATED: 
        return {...state,Toprated: payload}

        case Types.GET_API_ACTION: 
        return {...state, Action: payload}

        case Types.GET_API_COMEDY: 
        return {...state, Comedy: payload}

        case Types.GET_API_HORROR: 
        return {...state, Horror: payload}

        case Types.GET_API_ROMANCE: 
        return {...state, Romance: payload}

        case Types.GET_API_DOCUMENTARIES: 
        return {...state,Documentaries: payload}
        
        case Types.SET_MOVIE_DETAIL: 
        return {...state,MovieDetail: payload}

        case Types.GET_SEARCH_MOVIES: 
        return {...state,SearchMovies: payload}

        default:
           return state
    }
} 

export default reducer