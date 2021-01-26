import React from "react";
import { NavLink } from "react-router-dom";
import imgaLogo from "../assets/kjmLogo.png";
import imgaA from "../assets/event1.png";
import imgaB from "../assets/event2.png";
import imgaC from "../assets/event3.png";
import imgaD from "../assets/mix.png";
import imgaE from "../assets/tinea.jpg";

import Map from "../pages/map";
import Footer from "../pages/footer";

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

        
        <a href="#aboutStory">
        <li className="profile">
          <div className="img"></div>
        </li>
        </a>
      </ul>
    </nav>
    <div className="boarView">
    <img src={imgaA} className="img"></img>
    </div>
    <div className="boarView1">
    <img src={imgaC} className="img"></img>
    </div>
    <div className="boarView2">
    <img src={imgaB} className="img"></img>
    </div>
    <div className="boarView3">
    <img src={imgaD} className="img"></img>
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
