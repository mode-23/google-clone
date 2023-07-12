import React from 'react'
import {ImNewspaper} from 'react-icons/im'
import {IoImageOutline} from 'react-icons/io5'
import {RiVideoLine} from 'react-icons/ri'
import {HiOutlineSearch} from 'react-icons/hi'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='NavBar'>
     <ul>
          <li><NavLink to='/' activeclassname='active' exact="true"><HiOutlineSearch /> All</NavLink></li>
          <li><NavLink to='/news' activeclassname='active' exact="true"><ImNewspaper /> News</NavLink></li>
          <li><NavLink to='/images' activeclassname='active' exact="true"><IoImageOutline /> Images</NavLink></li>
          <li><NavLink to='/videos' activeclassname='active' exact="true"><RiVideoLine /> Videos</NavLink></li>
     </ul>
    </nav>
  )
}

export default Nav
