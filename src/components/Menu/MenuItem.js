import React from 'react'
import {randomRgbaColor} from "../../Utils"

import {Link} from 'react-scroll'
function MenuItem(props) {
    const {name, Icon,to} = props;
  return (
    <div>
         <Link className="subMenu" to={to} spy={true} smooth={true}  offset={-70} duration={500} activeClass="active">
            <Icon className="icon" style={{color: randomRgbaColor(1)}}></Icon>
            <span>{name}</span>
        </Link>
    </div>
  )
}

export default MenuItem