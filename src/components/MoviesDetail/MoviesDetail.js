import React from 'react'
import { useDispatch } from 'react-redux';
import { setMovieDetail } from '../store/actions';
import {moment } from 'moment'
import './MoviesDetail.css'




function MoviesDetail(props) {
    const {movie, showModal} = props;
    const dispatch = useDispatch();
    const handleCloseModal = ()=>{
        dispatch(setMovieDetail(null))
    }
  return (

        <div className="MoviesDetailModal">
            <div 
                className={`backdrop   ${showModal ? 'showBackdrop' : 'hideBackdrop'}`} 
                onClick={handleCloseModal}
            ></div> 

            <div className={`modal   ${showModal ? 'showModal' : 'hideModal'}`} 
                style={ 
                    movie ? {
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
                  
                    backgroundSize: 'cover'
            }: {}  
            }
            > 
     
                <div className="container">
                    <div className="movieInfo">
                        <h1 className="movieTitle">{movie && (movie.title || movie.name)} </h1>

                        <p className="statistical">
                            <div className="rating">Rating: {movie && movie.vote_average * 10}%</div>
                            <div className="popularity">Popularity:  {movie && movie.popularity}</div> 
                        </p> 
                          
                     
               
                        <p className="releaseDate">Release Date:{movie && movie.release_date}
                        </p>
                        <p className="runtime">Vote: {movie && (movie.vote_count)}</p>
                        <p className="overview"> {movie && movie.overview}</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default MoviesDetail

