import React from 'react'
import styled from 'styled-components'
import ImgSlider1 from './ImgSlider1';


function FloorView() {
    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
    }
  return (

    <Container>
        <ImgSlider1/>
    </Container>
  )
}

export default FloorView

const Container = styled.main`
    min-height: calc(100vh - 90px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
`

const Wrap = styled.div`
    cursor: pointer;
    img{
        border: 4px solid transparent;
        border-radius: 4px;
        object-fit: scale-down;
        object-position: center;
        width:70%;
        height:70%;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px - 10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;
    }
    &:hover{
        border: 4px solid rgba(249, 249, 249, 0.8);
    }

`