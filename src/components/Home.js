import React from 'react'
import styled from 'styled-components'
import Viewers from './Viewers'
import HomeImage from './HomeImage'

function Home() {
  return (
    <Container>
      <HomeImage/>
      <h1 style={{position:"absolute", top: "15%", left: "50%", transform: "translate(-50%, -50%)", color: "white", background:"#a32638cc"}}>The Library is here for You</h1>
       <h3 style={{position:"absolute", top: "20%", left: "50%", transform: "translate(-50%, -50%)", color: "white", background:"#a32638cc"}}>Welcome to Stevens Library</h3>
      <Viewers/>

    </Container>
  )
}

export default Home


const Container = styled.main`
    min-height: calc(100vh - 90px);
    // padding: 0 calc(3.5vw + 5px);
    position: relative;

    // &:before{
    //     background: url('images/home-background.png')center center / cover 
    //     background:#f5f5f5
    //     no-repeat fixed;
    //     content: "";
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //     right: 0;
    //     bottom: 0;
    //     z-index: -1;
    // }
`
