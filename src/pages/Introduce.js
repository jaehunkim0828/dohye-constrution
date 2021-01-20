import React from 'react';
import Slide from '../components/Slide';


function Introduce() {
  const page = 'page1';
  const pageName = '인사말';
  return (
    <div>
      <Slide page={page} pageName={pageName}/>
      <div>hi</div>
    </div>
  );
}

export default Introduce;