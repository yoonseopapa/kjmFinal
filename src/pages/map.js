import React from "react";
import MapContainer from "../pages/mapContainer";
import imgaB from "../assets/mapDesign.png";
import imgaA from "../assets/mapDesignP.png";

const Map = () => {
  return (
    <>
    {/* <Navibar/> */}
        <section className='mapMain' id='mapRow'>
      <div className='mapContainer'>
        <div className='mapKakao'>
        <img className="mapImage" src={imgaB} alt=""/>
          {/* <MapContainer/> */}
          </div>
          <div className='mapKakaoPhone'>
        <img className="mapImage" src={imgaA} alt=""/>
          {/* <MapContainer/> */}
          </div>
      </div>
    </section>
    </>
  );
};

export default Map;
