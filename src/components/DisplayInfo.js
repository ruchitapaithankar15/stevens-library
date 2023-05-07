import React from 'react'
import styled from 'styled-components'
function DisplayInfo() {
  return (
    <Container>
      <Title>Calder Corner</Title>
      <SubContainer>
      <Image src='/images/Library/Stabile Calder second floor.jpg'/>
      <Content>
      <Location>second floor, near the restrooms and library training room 204</Location>
      <Description>Calder’s stabile sculpture “Hard to Swallow” is found in the “Calder Corner” on the second floor of the Library, along with an exhibit about Calder’s experiences as a student at Stevens.  
        The exhibit includes Calder’s senior thesis and yearbook, photos, artifacts, and models.</Description>
        </Content>
      </SubContainer>
    </Container>
  )
}

export default DisplayInfo


const Container = styled.div`
    color:black;
    align-item: center;
`

const Title = styled.h1`


`

const Location = styled.h4`

`

const Description = styled.div`


`

const SubContainer = styled.div`
display: flex;

max-width: 140px;
`

const Content = styled.div`

`

const Image = styled.img`
width: 400px;
height: auto;

`