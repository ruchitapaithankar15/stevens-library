import React from 'react'
import '../AboutInfo.css'
import styled from 'styled-components'

function AboutInfo() {
  return (
    <Container>
        <Title>ABOUT SAMUEL C. WILLIAMS LIBRARY</Title>
        <Description>
        The Samuel C. Williams Library is the center for information discovery and preservation at Stevens Institute of Technology. 
        The Library is dedicated to fostering an innovative environment with technology, education and culture. 
        It is our goal to create a distinctive library experience through services and resources that promote information and media literacy, 
        knowledge creation, global scholarly communication, and critical and creative thinking for our students, faculty, and researchers around the world.
        </Description>
        <Video src="https://www.youtube.com/embed/FWPWTzDD1GY" />
        <Subscript>Discover Create Share at the Samuel C. Williams Library</Subscript>
{/* <iframe width="420" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe> */}
    </Container>
  )
}

export default AboutInfo


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin: 10px;
    padding: 20px;
    width: 100%;
    max-height: 400px;
    min-width: 100px;
    background-color: white;
    z-index: 1;


`


const Title = styled.h1`
background:#a32638cc

`

const Description = styled.div`
font-size: 20px;
letter-spacing: 1.5px;
text-align: center;
line-height: 1.5;
background:#a32638cc
`

const Video = styled.iframe`
  padding: 100px;
`

const Subscript = styled.p`
    font-size: 20px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
    background:#a32638cc;

`