import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useViewport } from '../hooks';
import { getSearchMovies, setMovieDetail } from '../store/actions';
import './SearchMovies.css'


const useQuery = () => new URLSearchParams(useLocation().search);



function SearchMovies(props) {
    const [windowWidth] = useViewport();
    const dispatch = useDispatch();
    const {SearchMovies} = useSelector(state => state.infoRd);

    const keywords = useQuery().get('keywords');

    useEffect(() => {
        if(keywords) dispatch(getSearchMovies(keywords))
        
    },[keywords, dispatch])

  return (
    <div className="SearchPane">
        {
            SearchMovies && SearchMovies.length > 0 ? (
                <div className="searchContent" 
                 style={{
                    gridTemplateColumns: `repeat(${windowWidth > 1200 ? 5 :
                                                   windowWidth > 992 ? 4 :
                                                    windowWidth > 768 ? 3 :
                                                    windowWidth > 600 ? 2 : 1}, auto)`
                }}
            >
                {

                    SearchMovies.map((movie, index) =>{

                    if(movie.backdrop_path !== null && movie.media_type !== 'person'){
                        const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` 
                            return (
                             <div className="movieItem" key={index} onClick={() => dispatch(setMovieDetail(movie))}>
                             <img src={imageUrl}></img>
                             <span>{movie.title || movie.name}</span>
                       </div>
                            )
                        }
                    }
            
                    ) 
                }
                
            </div>
            ) : (
                <div className="notFound">
                    <h1>Your search for "keywords" did not have any matches.</h1>
                </div>
            )
        }
    </div>
  )
}

export default SearchMovies


