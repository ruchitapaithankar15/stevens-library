import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Nav>
        <Logo src="/images/stevenslogo.jpeg"/>
        {/* <Container>
        <h3>Samuel C. </h3>
        <h3>Williams Library</h3>

        </Container> */}
        <NavMenu>
                <a>
                    <img src='/images/home.png'/>
                    <span>HOME</span>
                </a>
                <a>
                    <img src='/images/history.png'/>
                    <span>HISTORY</span>
                </a>

                <a>
                    <img src='/images/vase.png'/>
                    <span>ARTIFACTS</span>
                </a>

                <a>
                    <img src='/images/layout.png'/>
                    <span>FLOORPLAN</span>
                </a>

                <a>
                    <img src='/images/group.png'/>
                    <span>ABOUT</span>
                </a>


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

`

const Logo = styled.img`
    width: 80px;
    margin-right: 50px;
`


const NavMenu = styled.div`
    display: flex;
    flex:1;
    margin-left:25px;
    align-items: center;
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

          &:after{
            content: "";
            height: 2px;
            background: white;
            position: absolute;

            left:0;
            right:0;
            bottom: -12px;
        }
        }
    }
`


