import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Header() {
  return (
    <Nav>
        <Link to='/' style={{ textDecoration: 'none' }}>
        <Logo src="/images/stevenslogo.jpeg"/>
        </Link>
        <NavMenu>
            <LogoImg src='/images/SCW.png'/>
            <Link to='/' style={{ textDecoration: 'none' }}>
            <a>
                    <img src='/images/home.png'/>
                    <span>HOME</span>
                </a>
            </Link>
            <Link to='/perfloor' style={{ textDecoration: 'none' }}>
                <a>
                    <img src='/images/history.png'/>
                    <span>HISTORY</span>
                </a>
                </Link>
                <Link to='/floorview' style={{ textDecoration: 'none' }}>
                <a>
                    <img src='/images/layout.png'/>
                    <span>FLOORPLAN</span>
                </a>
                </Link>
                <Link to='/about' style={{ textDecoration: 'none' }}>
                <a>
                    <img src='/images/group.png'/>
                    <span>ABOUT</span>
                </a>
                </Link>


        </NavMenu>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
height: 90px;
background: #a32638;
display: flex;
align-item: center;
padding: 0 36px;
overflow-x: hidden;
grid-gap:25px; //can change this too
position: sticky;

`

const Logo = styled.img`
    width: 80px;
    margin-right: 20px;
`


const NavMenu = styled.div`
    display: flex;
    flex:1;
    margin-left:25px;
    align-items: center;
    grid-gap:50px;  //change this to reduce the space between options after putting the logo
    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        img {
          height: 20px;
          margin-right: 5px;
        }
        span{
          font-size: 13px;
          letter-spacing: 1.42px;
          margin-right: 10px
          position: relative;
          color: white; 
        }
    }
`


const LogoImg = styled.img`

    width: 150px;
    margin-right: 50px;

`