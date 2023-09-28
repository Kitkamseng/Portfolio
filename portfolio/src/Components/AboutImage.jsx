import React from 'react'
import '../Styling/AboutImage.css';
import ImageOne from '../images/ImageOne.png';
import ImageTwo from '../images/ImageTwo.png';

function AboutImage() {
  return (
    <div className='image-container'>
        <div className='image-box-one'>
            <img src={ImageOne} />
        </div>
        <img src={ImageTwo} />
    </div>
  )
}

export default AboutImage