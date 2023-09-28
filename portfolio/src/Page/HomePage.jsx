import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'; 
import '../Styling/HomePage.css';
import Header from '../Components/Header';
import ProfileIcon from '../images/ProfileIcon.jpeg';
import AnimatedLetters from '../Components/AnimatedLetters';
import SkillsInfo from '../Components/SkillsInfo';
import AboutImage from '../Components/AboutImage';

function HomePage() {

    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['K', 'a', 'm', ' ', 'S', 'e', 'n', 'g'];
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', '-', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', ' ', '/', ' ', 'W', 'e', 'd', '-', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', ]

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

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
                {/* Home Page Segment */}
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
                </div>


                {/* About Segment */}
                <div className='About-Box' id='about'>
                    <div className='left-container'>
                        <div className='About-Container'>
                            <div className='About-content-box'>
                                <div className='About-title'>
                                    About Me
                                </div>
                                <div className='About-Content'>
                                As an innovative tech mind, the world of programming has always intrigued me. 
                                Starting my programming journey on virtual platforms, it has allowed me to solve 
                                exciting challenges and problems. Since then, I have been on the hunt for new 
                                technologies and learning about upcoming frameworks and languages that are able 
                                to solve issues and create solutions more efficiently and effectively. 
                                Exposing myself to different coding languages and frameworks, it is truly a 
                                blessing that I am given the opportunity to be on the path of a software developer
                                where I can enable myself to learn and discover more ways and means to fuel my 
                                passion in becoming a better developer.
                                </div>
                            </div>
                            <button 
                                className='skills-button'
                                onClick={openModal}
                            >
                                Skills
                            </button>
                            <div className='modal-info'>
                                <Modal
                                    isOpen={isOpen}
                                    onRequestClose={closeModal}
                                    className='modal'
                                >
                                    <SkillsInfo />
                                    <span 
                                        class="close"
                                        onClick={closeModal}
                                    >&times;
                                    </span>
                                </Modal>
                            </div>
                        </div>
                        
                    </div>
                    <div className='right-container'>
                        <AboutImage />
                    </div>
                </div>









                <div className='Contact-Box' id='contact'>
                    Contact
                </div>
            </div>
        </>
    )
}

export default HomePage