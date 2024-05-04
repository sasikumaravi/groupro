import React from 'react'
import '../App.css';
import img1 from './8841.png_1200-removebg-preview.png'
import img2 from './images-removebg-preview.png'
export default function Navbar() {
    return (
        <>
        <div className='main-nav'>
            <div>
                <img src={img2} style={{ height: '100px' }} alt='no'/>
            </div>
            <div className='content1 sedan-sc-regular'>
                <div>Home</div>
                <div>About</div>
                <div>Services</div>
            </div>
            <div className='content2'>
              <div><button className='merriweather-light'>Sign in</button></div>  
               <div><button className='merriweather-light'>Sign up</button></div> 
            </div>
        </div>
        <div className='next-content'>
        <div className='platypi'>
        <h1>Money</h1>
        <h1>I will tell you the secret to getting rich on Wall Street. You try to be greedy when others are fearful. And you try to be fearful when others are greedy. --Warren Buffett</h1>
        </div>
        <div>
            <img src={img1} style={{height:'500px'}} alt='no'/>
        </div>
        </div>
        </>
    )
}
