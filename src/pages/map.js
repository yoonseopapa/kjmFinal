import React from "react";
import MapContainer from "../pages/mapContainer";
import imgaB from "../assets/mapDesign.png";

const Map = () => {
  return (
    <>
    {/* <Navibar/> */}
        <section className='mapMain' id='mapRow'>
      <div className='mapContainer'>
        <div className='mapRow' >
          <h3>
            <div className='line'>
              <span>CONTACT
              <br/>
              <br/>
              </span>
              
              <p className="contactMent"></p>

              <h2 className="mentTitle">
              LOCATION:
              </h2>
              <p className="ment"></p>
              <p className="mentAddr">
	            <br/>(도로명) 서울시 서초구 사임당로 158, 래미안리더스원상가 3층
              </p>
              <h2 className="mentTitle">
              <br/>
              TEL : 02-6953-1212
              </h2>
              <h2 className="mentTitle">
              <br/>
              Fax : 02-6953-5566
              </h2>
              <h2 className="mentTitle">
              <br/>
              E-mail : teltelte@naver.com
              </h2>
            </div>
          </h3>
        </div>
        <div className='mapKakao'>
        <img className="mapImage" src={imgaB} alt=""/>
          {/* <MapContainer/> */}
          </div>
      </div>
    </section>
    </>
  );
};

export default Map;
