import React from 'react';

function Footer() {
  return (
    <div id='footer'>
      <div id='footer-left-container'>
        <div id='footer-script'style={{ fontSize: "1.2rem", fontWeight: 600, color: "black" }}>(주) 도혜 종합건설</div>
        <div className='footer-subscript' style={{ fontSize: "1rem", color: "black" }}>Dohye Total Construction Co.,Ltd</div>
      </div>
      <div id='footer-right-container'>
        <div className='footer-subscript' style={{ fontSize: "0.9rem", color: "rgb(61, 62, 56)" }}>주소지:  경기 수원 영통구 청명남로 60번길2(영통동,3층)</div>
        <div className='footer-subscript' style={{ fontSize: "0.9rem", color: "rgb(61, 62, 56)" }}>대표전화: 031-202-5200</div>
      </div>
    </div>
  )
}

export default Footer;