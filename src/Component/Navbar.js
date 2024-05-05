import React from 'react'
import '../App.css';
import img2 from './images-removebg-preview.png'
import { NavLink } from 'react-router-dom';
import { useAuth } from './Auth';
export default function Navbar(props) {
    const auth=useAuth()
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
                {!auth.user && (<div><NavLink to='signin'><button className='merriweather-light'>Log in</button></NavLink><NavLink to='signup'><button className='merriweather-light'>Register</button></NavLink></div>)} 
                    {auth.user && <NavLink to='logout'><div><button className='merriweather-light'>Logout</button></div> </NavLink>} 
                </div>
               {auth.user && (<div><NavLink to='signin'><button className='merriweather-light'>Log in</button></NavLink><NavLink to='signup'><button className='merriweather-light'>Register</button></NavLink></div>)} 
            </div>
        </>
    )
}
