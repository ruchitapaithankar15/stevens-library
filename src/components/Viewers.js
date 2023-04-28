import React from 'react'
import styled from 'styled-components'


function Viewers() {
  return (
   <Container>
       <Wrap>
           <img src="/images/floor1.png"/>
       </Wrap>
       <Wrap>
           <img src="/images/viewers-pixar.png"/>
       </Wrap>
       <Wrap>
           <img src="/images/viewers-marvel.png"/>
       </Wrap>
       <Wrap>
           <img src="/images/viewers-starwars.png"/>
       </Wrap>
       <Wrap>
           <img src="/images/viewers-national.png"/>
       </Wrap>
   </Container>
  )
}

export default Viewers

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    padding: 30px 0px 26px;
    grid-gap:25px;
    grid-template-columns: repeat(5, minmax(0, 1fr)); //change here if you need 3 boxes

`

const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    border: 3px solid rgba(169,45,61,0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px - 10px,
        rgb(0 0 0 / 69%) 0px 16px 10px -10px;
    transition: all 250mx cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;

    }
    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0px 26px 30px - 10px,
        rgb(0 0 0 / 72%) 0px 16px 10px -10px;
        transform: scale(1.05);
        border-color: rgba(169,45,61,0.8);


        
    }
`