import React, { useEffect, useState } from 'react'
import NetflixLogo from'../../assets/images/netflix.png';
import {MdSearch} from 'react-icons/md';
import "./Navbar.css";
import {useScrolly} from '../hooks'
import {Link} from 'react-scroll'
import { useNavigate } from 'react-router-dom';
function Navbar(props) {

   const [scrollY] = useScrolly ();
   //tim kiem
   const [keywords, setKeyword] = useState('');
   const navigate = useNavigate();


  
   const handleChangeInput = (e) => {
         let keywords = e.target.value;
         setKeyword(keywords);
         (keywords.length > 0) 
         ? navigate(`/search?keywords=${keywords.trim()}`)
         : navigate('/')
   }

   const goHome = () => {
         navigate('/');
         setKeyword("");
   }

  return (
      <div className="Navigation" style={scrollY < 50 ? {backgroundColor: 'transparent'} : {backgroundColor: 'var(--color-background'}}>
        <div className="navContainer">
            <div className="logo" onClick={goHome}>
                 <img src={NetflixLogo} alt=""></img>
            </div>

            <div className="navSearch">
                 <MdSearch className="iconSearch"></MdSearch>
                 <input 
                        type="text" 
                        placeholder="Nhap ten"
                        onChange={handleChangeInput}
                        value={keywords}>
                  </input>
            </div>
        </div>

        <Link className="Menu">
           <Link  to="originals" spy={true} smooth={true}  offset={-70} duration={500} activeClass="active" >
                <h3 >Originals</h3>
          </Link>
          <Link to="trending" spy={true} smooth={true}  offset={-70} duration={500} activeClass="active" >
                <h3 >Trending</h3>
          </Link>

          <Link  to="toprated" spy={true} smooth={true}  offset={-70} duration={500} activeClass="active" >
                <h3 >Top</h3>
          </Link>
          <Link   to="action" spy={true} smooth={true}  offset={-70} duration={500} activeClass="active"  >
                <h3 >Action</h3>
          </Link>

          <Link  to="comedy" spy={true} smooth={true}  offset={-70} duration={500} activeClass="active"  >
                <h3 >Commedy</h3>
          </Link>
          <Link   to="horror" spy={true} smooth={true}  offset={-70} duration={500} activeClass="active" >
                <h3 >Horror</h3>
          </Link>

          <Link   to="romance" spy={true} smooth={true}  offset={-70} duration={500} activeClass="active" >
                <h3 >Romance</h3>
          </Link>
          <Link   to="documentaries" spy={true} smooth={true}  offset={-70} duration={500} activeClass="active"  >
                <h3 >Documentaries</h3>
          </Link>
        </Link>
      </div>
   
  )
}

export default Navbar;

