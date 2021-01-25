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

  const [isScence, mouseScence] = useState(false);  

  const focusScence = () => {
      mouseScence(!isScence);
  }

  const leavesScence = () => {
    mouseScence(false);
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
            <NavDropdown.Item className='down-item' href='/page1-1'>인사말</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className='down-item' href='/page1-2'>경영이념</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className='down-item' href='/page1-3'>조직현황</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className='down-item' href='/page1-4'>인증서</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            className='list'
            title='시공현장'
            alignRight
            show={isScence}
            onMouseEnter={() => {
              focusScence();
              console.log();
            }}
            onMouseLeave={() => {
              leavesScence();
              console.log();
            }}
          >
            <NavDropdown.Item className='down-item' href='/page2-1'>준공/ 시공사진</NavDropdown.Item>
          </NavDropdown>
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
            <NavDropdown.Item className='down-item' href='/page3-1'>공사실적현황</NavDropdown.Item>
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
            <NavDropdown.Item className='down-item' href='/page4-1'>약도</NavDropdown.Item>
          </NavDropdown> 
        </Navbar.Collapse>
        </Nav>
      </Navbar>
    </div>
  )
}

export default CustomNav;