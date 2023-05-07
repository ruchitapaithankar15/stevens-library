import React from 'react'
import styled from 'styled-components'
import Blog from "../app/json files/data.json"
import {useParams} from 'react-router-dom'

function Calder() {
  const{id} = useParams();
  return (
    <Container>


<Background>
        <img src={Blog[id].Image}/>
      </Background>
      <ImageTitle>
        {/* <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78'/> */}
        <h1>{ Blog[id].Name }</h1>
      </ImageTitle>
      <SubTitle>
        {Blog[id].Location}
      </SubTitle>
      <Description>
      {Blog[id].Description}
      </Description>


      {/* <CTA>
        <Title>{ Blog[id].Name }</Title>
        <Container2>
        <CTAPictureOne src={Blog[id].Image}/>
        <Description>
        {Blog[id].Description}
        </Description>
        </Container2>
      </CTA> */}
    </Container>
  )
}

export default Calder


const Container = styled.div`
    min-height: calc(100vh - 90px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;

`


const Background = styled.div`
    position:fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

`
const ImageTitle = styled.div`
    height: 30vh;
    min-height:170px;
    width: 35vh;
    min-width: 200px;
    margin-top: 55px;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

`


const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top:26px;
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 700px;

`