import React from 'react'
import ReactPlayer from 'react-player'
import {VscMute, VscUnmute} from 'react-icons/vsc';
import "./Intro.css"
import {useState} from "react"

function Intro(props) {

    const [isMuted,setIsMuted] = useState(false);
  return (
    <div className="IntroContainer">
        <ReactPlayer playing={true} loop={true} width="100%" height="100%" volume={1} muted={isMuted} url="https://www.youtube.com/watch?v=7rI56NmD33Y" className="videoIntro"></ReactPlayer>
        <div className="infoIntro">
            <h1 className="headingIntro">Netflix - Sweet Home</h1>
            <p className="overviewIntro">
            Welcome to Hell. 
            When you open your eyes, all you see are monsters.
            Try to survive the end of a doomed world!
            </p>
        </div>

        
        {
            isMuted ? (
                <VscMute className='btnVolume' onClick={()=> setIsMuted(prev => !prev)}></VscMute>
            ) : (
                <VscUnmute className='btnVolume' onClick={()=> setIsMuted(prev => !prev)}></VscUnmute>   
            )
        }
            
     
     <div className="fadeBottom"></div>
    </div>
  )
}

export default Intro