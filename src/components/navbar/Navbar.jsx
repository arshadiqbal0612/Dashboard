import React from 'react'
import SearchComponent from '../searchbar/SearchComponent'
import './Navbar.css'


export const Navbar = () => {
    return (
        <div className='main-navbar'>
            <div className="navbar-item flex items-center justify-center mt-4 ">
                <div className='search-bar-1' >
                    <SearchComponent />
                </div>

                <div className="profile-btn">
                    <div className="notification">h1</div>
                    <div className="profile">g</div>
                </div>

            </div>
        </div>
    )
}
