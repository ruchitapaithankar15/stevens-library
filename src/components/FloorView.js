import React from 'react'
import styled from 'styled-components'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "/images/floorplan1.jpg" },
  { url: "/images/floorplan2.jpg"},
  { url: "/images/floorplan3.jpg" },

];

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
        <h2 style={{display: 'flex',  justifyContent:'center', color: 'black'}}>Floor Plan</h2>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>  
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={false}
        showNavs={true}
        navStyle={2}
        infinite={true}
        color={'blue'}
      />
    </div>
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