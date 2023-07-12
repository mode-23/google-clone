import React from 'react'
import { Link } from 'react-router-dom'
import Search from './SearchBar'
import Nav from './Nav'

const Header = () => {
  return (
    <header className='Mhder'>
      <div className="container">
        <div className="MhderHolder">
        <Link to='/' className='logo'>
            Google
        </Link>
        <Search />
      <div className="toggleDark-Light">
        google
      </div>
      </div>
        <Nav />
        </div>
    </header>
  )
}

export default Header
