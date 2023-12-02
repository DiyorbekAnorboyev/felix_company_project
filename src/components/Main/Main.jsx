import React from 'react'
import "./Main.css"
import logo from "../constants/logo bookshop.svg"
import search from "../constants/search-refraction.svg"
import alarm from "../constants/alarm.svg"
import userlogo from "../constants/user.svg"

function Main() {
    return (
        <div>
            <div className='main-content'>
                <nav className='d-flex justify-content-between'>
                    <div className='d-flex gap-5'>
                        <div><img src={logo} alt='logo' /></div>
                        <div className='d-flex align-items-center gap-2'>
                            <img height={24} src={search} alt='search logo' />
                            <input className='input-search -control' placeholder='Search for any training you want ' />
                        </div>
                    </div>
                    <div className='d-flex gap-5'>
                        <div><img src={alarm} alt='alarm' /></div>
                        <div><img className='rounded-circle' src={userlogo} alt='userlogo' /></div>
                    </div>
                </nav>
                <div>
                </div>
            </div>
        </div>

    )
}

export default Main