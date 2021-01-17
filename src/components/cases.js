import React from "react";
import imgaA from "../assets/map.png";
import imgaB from "../assets/open.jpg";
import Carousel from "react-elastic-carousel"



const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Cases = () => {
  return (
    <section className='cases' id='cases'>
      <div className='container-fluid'>
        <div className='row'>
        <Carousel breakPoints={breakPoints} >
            <section className='case' key='1'>
              <div className='case-details'>
                 <div className="cardMent">
                <span>오시는길</span>
                <h2>(도로명) 서울시 서초구 사임당로 158, 래미안리더스원상가 3층</h2>
                <h2> TEL : 02-6953-1212</h2>
                <h2>FAX : 02-6953-5566</h2>
              </div>
              </div>
              <div className='case-image'>
                <img
                  src={imgaA}
                />
              </div>
            </section>
            <section className='case' key='2'>
              <div className='case-details'>
              <div className="cardMent">
                <span>진료시간</span>
                <h2>평일     :  AM 10:00 ~ PM 6:30 </h2>
                <h2>토요일   :  AM 10:00 ~ PM 3:00 </h2>
                <h2>점심시간 :  PM 2:00 ~ 3:00 </h2>
              </div>
              </div>
              <div className='case-image'>
                <img
                  src={imgaB}
                />
              </div>
            </section>
          </Carousel>
        </div>
       <div className="womanPower1"></div>
        </div>
        
    </section>
    
  );
};

export default Cases;
