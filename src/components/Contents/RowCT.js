import React, { useEffect, useState } from 'react'
import "./Contents.css"
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import {SmoothHorizontalScrolling} from '../../Utils'
import {useRef} from 'react'
import { useViewport } from '../hooks'
import { useDispatch } from 'react-redux'
import { setMovieDetail } from '../store/actions'



function RowCT(props) {



    const {movies, title, isNetFlix , idSection} = props;
    const sliderRef = useRef();
    const movieRef = useRef();
    const [dragDown , setDragDown] = useState(0);
    const [dragMove, setDragMove] = useState(0);
    const [isDrag, setIsDrag] = useState(false);
    const [windowWidth] = useViewport();


    const dispatch = useDispatch();
    
    const handleSetMovie =(movie) => {
        dispatch(setMovieDetail(movie))
    }

    const handleScrollRight = () => {
        const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth ;

        if(sliderRef.current.scrollLeft < maxScrollLeft){
            SmoothHorizontalScrolling(sliderRef.current, 
                20,
                movieRef.current.clientWidth * 5,
                sliderRef.current.scrollLeft)
        };
    }

    const handleScrollLeft = () => {

        if(sliderRef.current.scrollLeft > 0){
            SmoothHorizontalScrolling(sliderRef.current, 
                20,
                -movieRef.current.clientWidth * 5,
                sliderRef.current.scrollLeft)
        };
    }

    useEffect(() => {
        if(isDrag){
            if(dragMove < dragDown) handleScrollRight();
            if(dragMove > dragDown) handleScrollLeft();
        }

    },[dragDown, dragMove, isDrag])

    const onDragStart = e => {
        setIsDrag(true);
        setDragDown(e.screenX);
    }

    const onDragEnd = e => {
        setIsDrag(false);
    }

    const onDragEnter = e => {
        setDragMove(e.screenX);
    }
  return (

  

    <div className="moviesRowCOntainer" draggable='false' id={idSection}>
        <h1 className="heading">{title}</h1>
        <div className="moviesSlider" ref={sliderRef} draggable="true" onDragStart={onDragStart} onDragEnd={onDragEnd} onDragEnter={onDragEnter}  
        style={movies && movies.length > 0 ? { gridTemplateColumns: `repeat(${movies.length}, ${windowWidth > 1200 ? '360px' : windowWidth > 992 ? '300px' : windowWidth > 768 ? '250px' : '200px'})`} : {} }>
            {
               movies && movies.length > 0 && movies.map((movie, index) =>{
                    if (movie.poster_path && movie.backdrop_path !== null) {
                        let imageUrl = isNetFlix 
                            ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                            : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`

                        return (
                            <div key={index} className="movieItem" ref={movieRef} draggable="false" 

                            
                                onClick={() => handleSetMovie(movie)}>
                                    <img src={imageUrl}  alt=""  draggable="false"/> 
                                     <div className="movieName">{movie.title || movie.name}</div>
                            </div>
                        )
                    }
                }
               )
            }
        </div>


        <div className={`btnLeft ${isNetFlix && 'isNetFlix'}`} onClick={handleScrollLeft}>
            <FiChevronLeft></FiChevronLeft>
        </div>

        <div className={`btnRight ${isNetFlix && 'isNetFlix'}`}onClick={handleScrollRight}>
            <FiChevronRight></FiChevronRight>
        </div>
    </div>
  )
}

export default RowCT