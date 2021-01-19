import React from "react";
import MapContainer from "../pages/mapContainer";
import imgaB from "../assets/mapDesign.png";

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
      </div>
    </section>
    </>
  );
};

export default Map;
