import React from "react";
import { NavLink } from "react-router-dom";
import imgaLogo from "../assets/kjmLogo.png";
import imgaA from "../assets/event1.png";
import imgaB from "../assets/event2.png";
import imgaC from "../assets/event3.png";
import imgaD from "../assets/mix.png";
import imgaE from "../assets/machine.png";
import imgaA1 from "../assets/M22.png";
import imgaA2 from "../assets/white.png";
import imgaA3 from "../assets/vlaser.jpg";
import imgaA4 from "../assets/eonjain.png";
import imgaA5 from "../assets/co2laser.jpg";
import imgaA6 from "../assets/varasonic.jpg";
import imgaA7 from "../assets/velalux.jpg";
import Map from "../pages/map";
import Footer from "../pages/footer";
import playerA from "../assets/special.mp4";
import classes from "../styles/components/BackgroundVideo.scss";

const Special = () => {
  window.scrollTo(0, 0) 
  return (
<div>
<body>
<nav className="navg">
      <ul>
        <NavLink to='/' exact>
        <img className="logoImage" src={imgaLogo} alt=""/>
        {/* <li className="logo">김정민피부과</li> */}
        </NavLink>

        <NavLink to='/aboutStory' exact>
        <li className="profilefirst ">profile</li>
        </NavLink>

        <NavLink to='/laser' exact>
        <li className="laser ">laser</li>
        </NavLink>

        <NavLink to='/skinCare' exact>
        <li className="skinCare">skinCare</li>
        </NavLink>

        <NavLink to='/treatment' exact>
        <li className="treatment">Anti-Aging</li>
        </NavLink>
        <NavLink to='/special' exact>
        <li className="special">SPECIAL IN JM</li>
        </NavLink>
        
        <a href="#aboutStory">
        <li className="profile">
          <div className="img"></div>
        </li>
        </a>
      </ul>
    </nav>
   
    <div className="gununTitle">
    <div className="contentStroy">
        <p> JM김정민피부과만의 피부관리</p>
        <h1> Special In JM</h1>
        <h3>여성피부과 전문의 실력있는 에스티테이션</h3>
        <h3>프리미엄 서비스로 보답하겠습니다.</h3>
        <h2 >***
        <br/>맞춤형 1:1 메이컬케어 겉으로 보이는 부분만이 아니라 
        <br/>근본적인 부분을 해결합니다. 
        <br/>

        </h2>
        </div>
    <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className="skinVideo">
                <source src={playerA} type="video/mp4" />
            </video>
        </div>
</div>
 <div className="scrolldownLeftCon">scroll down</div>
    <div className="boarView">
    <img src={imgaA} className="img"></img>
    </div>
    <div className="boarView1">
    <img src={imgaC} className="img"></img>
    </div>
    <div className="boarView3">
    <img src={imgaD} className="img"></img>
    </div>
    <div className="boarView2">
    <img src={imgaB} className="img"></img>
    </div>
 
    <div className="boarView4">
    <img src={imgaE} className="img"></img>
    </div>
    <div className="boarList">
      <ul>
        <li>
          <div className="event_item_box">
            <a>
              <p className="imgWrap">
                {/* <img src={imgaD} className="img"></img> */}
              </p>
            </a>
          </div>
        </li>
        <li>
          <div className="event_item_box">
            <a>
              <p className="imgWrap">
                {/* <img src={imgaD} className="img"></img> */}
              </p>
            </a>
          </div>
        </li>
        <li>
          <div className="event_item_box">
            <a>
              <p className="imgWrap">
                {/* <img src={imgaD} className="img"></img> */}
              </p>
            </a>
          </div>
        </li>
        </ul>
    </div>
<Map/>
<Footer/>
</body>
</div>
  );
};

export default Special;
