import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Contents from '../Contents/Contents'
import Intro from '../Intro/Intro'
import MoviesDetail from '../MoviesDetail/MoviesDetail'

function Home() {
    const {MovieDetail} = useSelector(state => state.infoRd)
    const [isShowMovieDetail, setShowMovieDetail] = useState(false);


    useEffect(() => {
        setShowMovieDetail(MovieDetail ? true : false);
    },[MovieDetail])
  return (
    <div>
    <Intro></Intro>
      <Contents></Contents>
      <MoviesDetail movie={MovieDetail} showModal={isShowMovieDetail}></MoviesDetail>
    </div>
  )
}


export default Home