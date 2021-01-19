import React from "react";
// import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";
import { Carousel } from "react-bootstrap";
import imgaA from "../assets/winter.jpg";
import imgaB from "../assets/winter.jpg";
import imgaC from "../assets/winter.jpg";



const Banner = () => {
  return (
    <Carousel>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src= {imgaA}
      alt="First slide"
    />
    <Carousel.Caption>
    {/* <h3>김정민 원장</h3> 
      <p>정확한 진단과 책임있는 진료를 약속하는 피부과전문</p>*/}
    </Carousel.Caption>
  </Carousel.Item>
 
</Carousel>
    // <section className='main'>
    //   <div className='container'>
    //     <div className='row'>
    //       <h2>
    //         <div className='line'>
    //           <span>Creating unique brands is</span>
    //         </div>
    //         <div className='line'>
    //           <span>what we do.</span>
    //         </div>
    //       </h2>
    //       <div className='btn-row'>
    //         <a href='/services'>
    //           More about us <RightArrow />
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Banner;
