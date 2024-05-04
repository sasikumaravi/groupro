import React from 'react'
import '../App.css';
import img2 from './images-removebg-preview.png'
import { NavLink } from 'react-router-dom';
export default function Navbar() {
    return (
        <>
            <div className='main-nav'>
                <div>
                    <img src={img2} style={{ height: '100px' }} alt='no' />
                </div>
                <div className='content1 sedan-sc-regular'>
                    <NavLink to='/'><div>Home</div></NavLink>
                    <NavLink to='/about'><div>About</div></NavLink>
                    <NavLink to='/service'><div>Services</div></NavLink>
                    
                </div>
                <div className='content2'>

                    <NavLink to='signin'><div><button className='merriweather-light'>Sign in</button></div></NavLink>
                    <NavLink to='signup'><div><button className='merriweather-light'>Sign up</button></div> </NavLink>

                </div>
            </div>


        </>
    )
}
