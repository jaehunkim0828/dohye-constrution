import React from 'react';
import Slide from '../components/Slide';

function Map() {
  const page = 'page4';
  const pageName = '약도';
  return (
    <div>
      <Slide page={page} pageName={pageName} />
      <div>hi</div>
    </div>
  );
}

export default Map;