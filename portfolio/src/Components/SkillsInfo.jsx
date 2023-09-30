import React, { useEffect } from 'react'
import '../Styling/SkillsInfo.css';
import $ from 'jquery';
import JSIcon from '../images/JavaScriptLogo.png';
import CSIcon from '../images/C#icon.png';
import HTMLIcon from '../images/html5.png';
import CssIcon from '../images/cssIcon.png';
import SQLIcon from '../images/sqlIcon.png';
import PythonIcon from '../images/pythonIcon.png';
import ReactJsIcon from '../images/reactJS.png';
import ReactNativeIcon from '../images/reactNative.png';
import MySQLIcon from '../images/MySQL.png';
import OracleIcon from '../images/OracleSQL.png';
import JavaIcon from '../images/JavaIcon.png';
import GitIcon from '../images/GitIcon.png';


function SkillsInfo() {

    useEffect(() => {
        $(".animated-progress span").each(function () {
            $(this).animate(
              {
                width: $(this).attr("data-progress") + "%",
              },
              2000
            );
            $(this).text($(this).attr("data-progress") + "%");
          });
    }, []);

  return (
    <div className='Skills-Container'>
        <div className='skill-title'>
            SKILLS
        </div>
        <div className='skill-attribute-box'>
            <div className='attribute-Rone'>
                <div className='skill-box-one'>
                    <img src={JSIcon} alt='js-icon' />
                    <div className='box-one-title'>
                        JavaScript
                    </div>
                </div>
                <div className='animated-progress progess-green'>
                    <span data-progress="60"></span>
                </div>
            </div>
            <div className='attribute-Rone'>
                <div className='skill-box-one'>
                    <img src={CSIcon} alt='js-icon' />
                    <div className='box-one-title'>
                        C #
                    </div>
                </div>
                <div className='animated-progress progess-green'>
                    <span data-progress="40"></span>
                </div>
            </div>
        </div>
        <div className='skill-attribute-box'>
            <div className='attribute-Rone'>
                <div className='skill-box-one'>
                    <img src={HTMLIcon} alt='js-icon' />
                    <div className='box-one-title'>
                        HTML 
                    </div>
                </div>
                <div className='animated-progress progess-green'>
                    <span data-progress="80"></span>
                </div>
            </div>
            <div className='attribute-Rone'>
                <div className='skill-box-one'>
                    <img src={CssIcon} alt='js-icon' />
                    <div className='box-one-title'>
                        CSS
                    </div>
                </div>
                <div className='animated-progress progess-green'>
                    <span data-progress="80"></span>
                </div>
            </div>
        </div>
        <div className='skill-attribute-box'>
            <div className='attribute-Rone'>
                <div className='skill-box-one'>
                    <img src={SQLIcon} alt='js-icon' />
                    <div className='box-one-title'>
                        SQL
                    </div>
                </div>
                <div className='animated-progress progess-green'>
                    <span data-progress="55"></span>
                </div>
            </div>
            <div className='attribute-Rone'>
                <div className='skill-box-one'>
                    <img src={PythonIcon} alt='js-icon' />
                    <div className='box-one-title'>
                        Python
                    </div>
                </div>
                <div className='animated-progress progess-green'>
                    <span data-progress="30"></span>
                </div>
            </div>
        </div>
        <div className='skill-attribute-box'>
            <div className='attribute-Rone'>
                <div className='skill-box-one'>
                    <img src={ReactJsIcon} alt='js-icon' />
                    <div className='box-one-title'>
                        React Js
                    </div>
                </div>
                <div className='animated-progress progess-green'>
                    <span data-progress="70"></span>
                </div>
            </div>
            <div className='attribute-Rone'>
                <div className='skill-box-one'>
                    <img src={ReactNativeIcon} alt='js-icon' />
                    <div className='box-one-title'>
                        React Native
                    </div>
                </div>
                <div className='animated-progress progess-green'>
                    <span data-progress="45"></span>
                </div>
            </div>
        </div>
        <div className='skill-attribute-box'>
            <div className='attribute-Rone'>
                <div className='skill-box-one'>
                    <img src={MySQLIcon} alt='js-icon' />
                    <div className='box-one-title'>
                        MySQL WorkBench
                    </div>
                </div>
                <div className='animated-progress progess-green'>
                    <span data-progress="45"></span>
                </div>
            </div>
            <div className='attribute-Rone'>
                <div className='skill-box-one'>
                    <img src={OracleIcon} alt='js-icon' />
                    <div className='box-one-title'>
                        Oracle SQL 
                    </div>
                </div>
                <div className='animated-progress progess-green'>
                    <span data-progress="40"></span>
                </div>
            </div>
        </div>
        <div className='skill-attribute-box'>
            <div className='attribute-Rone'>
                <div className='skill-box-one'>
                    <img src={JavaIcon} alt='js-icon' />
                    <div className='box-one-title'>
                        Java
                    </div>
                </div>
                <div className='animated-progress progess-green'>
                    <span data-progress="30"></span>
                </div>
            </div>
            <div className='attribute-Rone'>
                <div className='skill-box-one'>
                    <img src={GitIcon} alt='js-icon' />
                    <div className='box-one-title'>
                        Github
                    </div>
                </div>
                <div className='animated-progress progess-green'>
                    <span data-progress="35"></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SkillsInfo