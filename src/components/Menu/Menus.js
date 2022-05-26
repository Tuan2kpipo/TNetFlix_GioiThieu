import React from 'react'
import {FaHome, FaHotjar, FaStar} from "react-icons/fa"
import {MdTheaterComedy} from "react-icons/md"
import {GiNinjaHeroicStance, GiRomanToga, GiGhost, GiBandageRoll} from "react-icons/gi"
import {GiFilmProjector} from 'react-icons/gi'
import {RiCustomerService2Fill}  from "react-icons/ri"
import "./Menus.css"
import MenuItem from './MenuItem'

function Menus(props) {
  return (
    <div  className="MenuPane">
       <MenuItem name="Trang chủ" Icon={FaHome} to='originals'></MenuItem>
        <MenuItem name="Quản lý phim" Icon={GiFilmProjector}></MenuItem>
        <MenuItem name="Quản lý nhân viên" Icon={RiCustomerService2Fill}></MenuItem>
        <MenuItem name="Quản lý vé" Icon={FaHotjar}></MenuItem>
        <MenuItem name="Thống kê" Icon={FaStar}></MenuItem>
    </div>
  )
}

export default Menus