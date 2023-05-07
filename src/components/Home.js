import React from 'react'
import styled from 'styled-components'
import Viewers from './Viewers'
import HomeImage from './HomeImage'
import Base from './Base'

function Home() {
  return (
    <Container>
      <HomeImage/>
      <Viewers/>
      {/* <Base/> */}
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
