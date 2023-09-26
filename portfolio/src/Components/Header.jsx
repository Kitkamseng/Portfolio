import React, { useEffect } from 'react'
import '../Styling/Header.css';
import GithubIcon from '../images/Github.png';

function Header() {

    useEffect(() => {
        const links = document.querySelectorAll('.Header-Sub-Containers');
        links.forEach(link => {
          link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default behavior of anchor links
            const targetId = this.innerText.toLowerCase(); // Create a target ID from the link's text
            const targetSection = document.getElementById(targetId); // Find the target section
            if (targetSection) {
              // Scroll smoothly to the target section
              targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
            }
          });
        });
      }, []);

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
                        Contact
                    </div>
                </div>
            </div>
            <div className='Header-Boxes'>
                <div className='Header-Github'>
                    <a href='https://github.com/Kitkamseng'><img src={GithubIcon} alt='github-logo'/></a>
                </div>
            </div>

        </div>
  )
}

export default Header