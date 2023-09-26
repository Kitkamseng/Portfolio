import React, { useEffect, useState } from 'react'
import '../Styling/HomePage.css';
import Header from '../Components/Header';
import ProfileIcon from '../images/ProfileIcon.jpeg';
import AnimatedLetters from '../Components/AnimatedLetters';

function HomePage() {

    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['K', 'a', 'm', ' ', 'S', 'e', 'n', 'g'];
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', '-', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', ' ', '/', ' ', 'W', 'e', 'd', '-', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', ]

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, []);

        return () => {
            clearTimeout(timer);
          };
    }, [])

    return (
        <>
            <Header />
            <div className='Home-Container'>
                <div className='Home-Box' id='home'>
                    <div className='Home-segments'>
                        
                    </div>
                    <div className='Home-segments'>
                        <div className='Home-mid-segment'>
                            <img src={ProfileIcon}  alt='profile-icon'/>
                            <div className='Home-display-box'>
                                <div className='display-title'>
                                    Hello World, I'm
                                </div>
                                <div className='display-surname'>
                                    Kit
                                </div>
                                <div className='display-name'>
                                    <AnimatedLetters letterClass={letterClass}
                                                    strArray={nameArray}
                                                    idx={15}
                                    />                                   
                                </div>
                                <div className='display-job-title'>
                                    <AnimatedLetters letterClass={letterClass}
                                                    strArray={jobArray}
                                                    idx={22}
                                    />     
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Home-segments'>
                        
                    </div>
                </div>
                <div className='About-Box' id='about'>
                    About
                </div>
                <div className='Contact-Box' id='contact'>
                    Contact
                </div>
            </div>
        </>
    )
}

export default HomePage