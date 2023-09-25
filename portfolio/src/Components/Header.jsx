import React from 'react'
import '../Styling/Header.css';
import GithubIcon from '../images/Github.png';

function Header() {
  return (
    <div className='Header-Container'>
        <div className='Header-Boxes' />
        <div className='Header-Boxes'>
            <div className='Header-arrangement'>
                <div className='Header-Sub-Containers'>
                    Home
                </div>
                <div className='Header-Sub-Containers'>
                    About
                </div>
                <div className='Header-Sub-Containers'>
                    Contact Me
                </div>
            </div>
        </div>
        <div className='Header-Boxes'>
            <div className='Header-Github'>
                <img src={GithubIcon} alt='github-logo'/>
             </div>
        </div>

    </div>
  )
}

export default Header