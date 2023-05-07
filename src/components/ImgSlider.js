import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImgSlider from './ImgSlider';
import styled from 'styled-components'

function ImgSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }
  return (
    <Carousel{...settings}>
          <Wrap>
                <img src="/images/slider-img1.png"/>
            </Wrap>
            <Wrap>
                <img src="/images/slider-img6.png"/>
          </Wrap>
          <Wrap>
          <img src="/images/slider.png"/>
        </Wrap>
        <Wrap>
        <img src="/images/slider-img3.png"/>
        </Wrap>
        <Wrap>
        <img src="/images/slider-img2.png"/>
        </Wrap>
    </Carousel>
  )
}

export default ImgSlider


const Carousel = styled(Slider)`
    // margin-top:20px;
    height: 200px
    ul li button{
        &:before{
            font-size: 10px;
            color: #a32638;
        }
    }

    li.slick-active button:before{
        color: #651823;
    }
    .slick-list {
        overflow: visible;
    }

    button{
        z-index: 1;
    }

`

const Wrap = styled.div`
    cursor: pointer;
    img{
        border: 4px solid transparent;
        border-radius: 4px;
        width: 100%
        height:100%
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px - 10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;

        &:hover{
            border: 4px solid rgba(249, 249, 249, 0.8);
        }
    }
`
