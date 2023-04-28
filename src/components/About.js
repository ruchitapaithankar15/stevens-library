import React from 'react'
import styled from 'styled-components'
import '../About.css'
import AboutInfo from './AboutInfo'

function About() {
  return (
    <div className='about'>
        <div className='about__container' >
            <img className='about__image'
            src='/images/aboutpage.png'/>
        <div className='about_column'>
           <AboutInfo/>
        </div>
        </div>
    </div>
  )
}

export default About


