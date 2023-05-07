import React from 'react'
import styled from 'styled-components'
function Base() {
  return (
    <Foot>
      <FootImg src='/images/footer (2).png'/>
    </Foot>
  )
}

export default Base

const Foot = styled.div`
height: 100%;
// background: url('/images/home-background.png')center center / cover; 
background: url('/images/footer (2).png');
display: flex;
align-item: center;
padding: 0 36px;
overflow-x: hidden;

`

const FootImg = styled.img`

    max-width:100%,
    max-height:100vh;
    margin-auto;
`