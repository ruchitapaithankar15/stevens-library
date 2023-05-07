import React from 'react'
import styled from 'styled-components'
function Detail() {
  return (
    <Container>
      {/* <Background>
        <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg'/>
      </Background> */}
      <Background>
        <img src='/images/Mobile Calder Great Hall.jpg'/>
      </Background>
      <ImageTitle>
        <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78'/>
      </ImageTitle>
      <SubTitle>
        Put SubTitle here.
      </SubTitle>
      <Description>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
      sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Description>
    </Container>
  )
}

export default Detail



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