import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import RowCT from './RowCT'
import {getAPI} from '../store/actions'
import * as ACTIONS from '../store/actions'
import { animateScroll  as scroll} from 'react-scroll';
import {FaArrowAltCircleUp} from 'react-icons/fa'
import { useScrolly } from '../hooks';

const movies = [
   

    
    
];


const ScrollToTop =() => {
    scroll.scrollToTop();
}
function Contents(props) {
    const dispatch = useDispatch();
    const [scrolly] = useScrolly();


    const {NetflixOriginals, 
        Trending,
        Toprated,
        Action,
        Comedy,
        Horror,
        Romance,
        Documentaries
    } = useSelector(state => state.infoRd);

    useEffect(() => {
        dispatch(ACTIONS.getAPI());
        dispatch(ACTIONS.getAPI_Trending())
        dispatch(ACTIONS.getAPI_TopRated());
        dispatch(ACTIONS.getAPI_Action())
        dispatch(ACTIONS.getAPI_Comedy());
        dispatch(ACTIONS.getAPI_Horror())
        dispatch(ACTIONS.getAPI_Romance());
        dispatch(ACTIONS.getAPI_Documentaries())

    },[dispatch])
 
   


  return (
    <div>
        <RowCT movies={NetflixOriginals} title="Netflix Originals"  isNetFlix={true} idSection='originals'></RowCT>
        <RowCT movies={Trending} title="Netflix Trending" idSection='trending'></RowCT>
        <RowCT movies={Toprated} title="Netflix Toprated" idSection='toprated'></RowCT>
        <RowCT movies={Action} title="Netflix Actions" idSection='action'></RowCT>
        <RowCT movies={Comedy} title="Netflix Comedy" idSection='comedy'></RowCT>
        <RowCT movies={Horror} title="Netflix Horror" idSection='horror'></RowCT>
        <RowCT movies={Romance} title="Netflix Romance"  isNetFlix={true} idSection='romance'></RowCT>
        <RowCT movies={Documentaries} title="Netflix Documentaries" idSection='documentaries'></RowCT>


        <div className="goToTop" onClick={() => ScrollToTop()}
                style={{visibility: `${scrolly > 600 ? 'visible' : 'hidden'}`}}
        >
            <FaArrowAltCircleUp></FaArrowAltCircleUp>
        </div>
    </div>
  )
}

export default Contents