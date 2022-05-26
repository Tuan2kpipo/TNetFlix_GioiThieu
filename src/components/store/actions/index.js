import axios from "axios";
import * as Types from '../types';
const API_KEY ="b03e2d2058c5980360c93b73036136ac";
const BASE_URL ="https://api.themoviedb.org/3"


export const getAPI = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`
        );
        dispatch({type: Types.GET_API_ORIGINALS, payload: result.data.results});

    } catch (error) {
        console.log("get api error: ", error);
    }
}



export const getAPI_Trending = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-us`
        );
        dispatch({type: Types.GET_API_TRENDING, payload: result.data.results});

    } catch (error) {
        console.log("get api trending error: ", error);
    }
}


export const getAPI_TopRated = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-us`
        );
        dispatch({type: Types.GET_API_TOPRATED, payload: result.data.results});

    } catch (error) {
        console.log("get api toprated error: ", error);
    }
}


export const getAPI_Action = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`
        );
        dispatch({type: Types.GET_API_ACTION, payload: result.data.results});

    } catch (error) {
        console.log("get api action error: ", error);
    }
}

export const getAPI_Comedy = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`
        );
        dispatch({type: Types.GET_API_COMEDY, payload: result.data.results});

    } catch (error) {
        console.log("get api comedy error: ", error);
    }
}


export const getAPI_Horror = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`
        );
        dispatch({type: Types.GET_API_HORROR, payload: result.data.results});

    } catch (error) {
        console.log("get api horror error: ", error);
    }
}


export const getAPI_Romance = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`
        );
        dispatch({type: Types.GET_API_ROMANCE, payload: result.data.results});

    } catch (error) {
        console.log("get api romance error: ", error);
    }
}




export const getAPI_Documentaries = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`
        );
        dispatch({type: Types.GET_API_DOCUMENTARIES, payload: result.data.results});

    } catch (error) {
        console.log("get api documentaries error: ", error);
    }
}


export const setMovieDetail = (movie) => dispatch => {
    dispatch({type: Types.SET_MOVIE_DETAIL, payload: movie})
}

export const getSearchMovies = (keywords) => async (dispatch) =>{
    try{
        const result = await axios.get(
            `${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&include_adult=false&query=${keywords}`
        )
        dispatch({type: Types.GET_SEARCH_MOVIES,payload: result.data.results});
    }catch(error){

        console.log("get api search error: ", error);

    }
}