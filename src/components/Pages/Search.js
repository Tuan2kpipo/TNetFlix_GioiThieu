import React from 'react'
import { useSelector } from 'react-redux'
import MoviesDetail from '../MoviesDetail/MoviesDetail'
import SearchMovies from '../SearchMovies/SearchMovies'

function Search() {
    const {MovieDetail} = useSelector(state => state.infoRd);
  return (
    <div>
        <SearchMovies ></SearchMovies>
        <MoviesDetail showModal={MovieDetail ? true : false} movie={MovieDetail}></MoviesDetail>
    </div>
  )
}

export default Search