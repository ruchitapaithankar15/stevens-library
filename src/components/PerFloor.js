import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function PerFloor() {
  return (
    <Container>
      <h4>

      </h4>
      <Content>
        <Link to='/calder/0' style={{ textDecoration: 'none' }}>
        <Wrap>
            <img src='/images/stevens-mobile.png'/>
        </Wrap>
        </Link>
        <Link to='/calder/1' style={{ textDecoration: 'none' }}>
        <Wrap>
        <img src='/images/library-history-exhibit.png'/>
        </Wrap>
        </Link>
        <Link to='/calder/2' style={{ textDecoration: 'none' }}>
        <Wrap>
        <img src='/images/piano.png'/>
        </Wrap>
        </Link>
        <Link to='/calder/3' style={{ textDecoration: 'none' }}>
        <Wrap>
        <img src='/images/mary-stuart-stevens-room.png'/>
        </Wrap>
        </Link>
        <Link to='/calder/4' style={{ textDecoration: 'none' }}>
        <Wrap>
        <img src='/images/100-hoboken-first.png'/>
        </Wrap>
        </Link>
        <Link to='/calder/5' style={{ textDecoration: 'none' }}>
        <Wrap>
        <img src='/images/lieb-exhibit.png'/>
        </Wrap>
        </Link>
        <Link to='/calder/6' style={{ textDecoration: 'none' }}>
        <Wrap>
        <img src='/images/calder-corner.png'/>
        </Wrap>
        </Link>
        <Link to='/calder/7' style={{ textDecoration: 'none' }}>
        <Wrap>
        <img src='/images/mechanical-models.png'/>
        </Wrap>
        </Link>
      </Content>
      <h4>

      </h4>
      <Content>
      
      </Content>

      <Content>

      </Content>
    </Container>
  )
}

export default PerFloor

const Container = styled.div`
    h4{
        font-size: 20px;
        letter-spacing: 1.8 px;
        color: #a32638;
    }
`

const Content = styled.div`
    padding-left: 10px;
    padding-right: 10px;
   display: grid;
   grid-gap:25px;
   grid-template-columns: repeat(4, minmax(0,1fr));

`


const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0/ 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover{
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0/ 72%) 0px 30px 22px -10px;
        border-color: rgba(249, 249, 249, 0.8);
    }
`