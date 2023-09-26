import React from 'react'
import '../Styling/AnimatedLetters.css';

function AnimatedLetters({ letterClass, strArray, idx }) {
  return (
    <span>
        {            
            strArray.map((char, i) => (
                <span key={char + 1} className={`${letterClass} _${i + idx}`}>
                    {char}
                </span>
            ))
        }
    </span>
    )
}

export default AnimatedLetters