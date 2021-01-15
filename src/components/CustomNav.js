import React, { useState } from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

import Logo from '../images/mainLogo.png';

function CustomNav() {

  const [isIntroHover, mouseIntroHover] = useState(false);  

  const focusIntroMouse = () => {
      mouseIntroHover(!isIntroHover);
  }

  const leavesIntroMouse = () => {
    mouseIntroHover(false);
  }

  const [isStatusHover, mouseStatusHover] = useState(false);  

  const focusStatusMouse = () => {
      mouseStatusHover(!isStatusHover);
  }

  const leavesStatusMouse = () => {
    mouseStatusHover(false);
  }
  const [isCenterHover, mouseCenterHover] = useState(false);  

  const focusCenterMouse = () => {
      mouseCenterHover(!isCenterHover);
  }

  const leavesCenterMouse = () => {
    mouseCenterHover(false);
  }

  return (
    <div>
      <Navbar className='main-navbar'collapseOnSelect bg="light" variant="light" expand='md'>
        <Nav>
          <Navbar.Brand href="/">
            <img style={{ objectFit: "cover", width: "15rem" }} src={Logo} alt='none' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='hi' />
        </Nav>
        <Nav id ='nav-list'>
          <Navbar.Collapse id="basic-navbar-nav">
          <NavDropdown
            className='list'
            title='회사소개'
            alignRight
            show={isIntroHover}
            onMouseEnter={() => {
              focusIntroMouse();
              console.log(isIntroHover);
            }}
            onMouseLeave={() => {
              leavesIntroMouse();
              console.log(isIntroHover);
            }}
          >
            <NavDropdown.Item href='/page1-1'>인사말</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='/page1-2'>경영이념</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='/page1-3'>연혁</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='/page1-4'>조직현황</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='/page1-5'>인증서</NavDropdown.Item>
          </NavDropdown>
          <div id='list-div'>
            <Nav.Link className='list' href="/page2">시공현장</Nav.Link>
          </div>
          <NavDropdown
            className='list'
            title='공사현황'
            alignRight
            show={isStatusHover}
            onMouseEnter={() => {
              focusStatusMouse();
              console.log(isStatusHover);
            }}
            onMouseLeave={() => {
              leavesStatusMouse();
              console.log(isStatusHover);
            }}
          >
            <NavDropdown.Item href='/page3-1'>공사실적현황</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='/page3-2'>기술자 보유현황</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            className='list'
            title='홍보센터'
            alignRight
            show={isCenterHover}
            onMouseEnter={() => {
              focusCenterMouse();
              console.log(isCenterHover);
            }}
            onMouseLeave={() => {
              leavesCenterMouse();
              console.log(isCenterHover);
            }}
          >
            <NavDropdown.Item href='/page4-1'>약도</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='/page4-2'>브로셔</NavDropdown.Item>
          </NavDropdown> 
        </Navbar.Collapse>
        </Nav>
      </Navbar>
    </div>
  )
}

export default CustomNav;