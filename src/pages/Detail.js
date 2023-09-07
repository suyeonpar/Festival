import React from 'react'
import { Map, MapMarker, Roadview } from 'react-kakao-maps-sdk';
import { useLocation } from 'react-router-dom'
import { styled } from 'styled-components';


export default function Detail() {

  const location = useLocation();
  const data = location.state;
  console.log(location) //location을 통해 정보를 받아 올 수 있다

  return (
    <>
    <h3>{data.TITLE}</h3>
    <img src={data.MAIN_IMG_NORMAL} alt={data.TITLE} title={data.TITLE}></img>
    <Map center={
      {
        lat: data.LAT,
        lng: data.LNG
      }
    } style={{width: "100%", height: "360px"}}>
      <MapMarker position={      
        {
        lat: data.LAT,
        lng: data.LNG 
        }
      }>
      </MapMarker>
    </Map>
    <Roadview position={      
      {
        lat: data.LAT,
        lng: data.LNG,
        radius: 50 //roadview에서 적어줘야한다
      }
      } style={{widt: "100%", height: "360px"}}>
    </Roadview>
    <p style={{textAlign: "justify", lineHeight: 2}}>{data.ITEMCNTNTS}</p>
    </>
  )
}

