import React from 'react';

import { NaverMap,  Marker } from 'react-naver-maps';

function NaverMapAPI() {
  const navermaps = window.naver.maps;
  return (

    <NaverMap
      mapDivId={'map-img'} // default: react-naver-map
      style={{
        width: '100%', // 네이버지도 가로 길이
        height: '20rem' // 네이버지도 세로 길이
      }}
      defaultCenter={{ lat: 37.25431816668, lng: 127.0773944695 }} // 지도 초기 위치
      defaultZoom={16}
    >
      <Marker
        key={1}
        position={new navermaps.LatLng(37.25431816668, 127.0773944695)}
        animation={2}
      />
    </NaverMap>
  );
}

export default NaverMapAPI;

