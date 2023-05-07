import React from 'react'
import styled from 'styled-components'
function Calder() {
  return (
    <Container>
      <CTA>
        <Title>The Stevens Mobile (first floor, Great Hall area)</Title>
        <Container2>
        <CTAPictureOne src='/images/Mobile Calder Great Hall.jpg'/>
        <Description>
        Alexander Calder graduated from Stevens in 1919 with a degree in Mechanical Engineering.  
        He went on to become a world-renowned sculptor, and his art work is found all over the world.  
        Calder donated “The Stevens Mobile” to Stevens in 1970 to commemorate the university’s one-hundredth anniversary, 
        and the Library has been its home ever since.
        </Description>
        </Container2>
      </CTA>
    </Container>
  )
}

export default Calder


const Container = styled.div`
  position: relative;
  height: calc(150vh - 90px);
  align-items: top;
  display: flex;
  justify-content: center;
&:before{
  background-position: top
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  content: "";
  top:0;
  bottom: 0;
  left: 0;
  right:0;
  opacity: 0.7;
  background-image: url("/images/history-bg.png");
  opacity: 0.2;
  z-index: -1;
}
`


const CTA = styled.div`
max-width: 1500px;
padding: 50px 40px;
width: 70%;
display: flex;
flex-direction: column;
margin-top: 60px;
align-items: center;

`


const CTAPictureOne = styled.img`
border-style: solid;
border-color: white;
  width: 50%;
  border-radius: 4px;
  border-width: thick;
  cursor: pointer;
  transition: all 250ms;
  &:hover{
    border-color: #a32638;
  }

`


const Description = styled.p`
  font-size: 20px;
  letter-spacing: 1.5px;
  text-align: center;
  color: black;
  line-height: 1.5;
  align-items: left;
  padding-left; 100px;
`


const Title = styled.h1`
font-size: 30px;
letter-spacing: 1.5px;
text-align: center;
color: black;
line-height: 1.5;

`


const Container2 =styled.div`
  display: flex;
`