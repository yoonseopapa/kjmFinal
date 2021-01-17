import React from "react";
import { NavLink } from "react-router-dom";
import imgaA from "../assets/kjmLogo.png";
import Cases from "../components/cases";
import Banner from "../components/banner";
import Service from "../components/service"
import Map from "../pages/map";
import Footer from "../pages/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import flower from "../assets/flowers-5535925_1920.png";
import flowerMain from "../assets/autumn-leaves-5386496_1920.png";

const Warrap = () => {

  return (
<div>
<body>

  <div className="wrapper">
    <div className="left"></div>
    <div className="right"></div>

    <nav className="navg">
      <ul>
        <NavLink to='/' exact>
        <img className="logoImage" src={imgaA} alt=""/>
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
        <li className="treatment">Treatment</li>
        </NavLink>

        
        <a href="#aboutStory">
        <li className="profile">
          <div className="img"></div>
        </li>
        </a>
      </ul>
    </nav>

    <div className="content">
      <div className="img-wrapper">
      <Banner/>
      </div>
      <div className="info" id="info">
        <ul>
        <Cases/>
        </ul>
      </div>

      <div className="text">
        <h1>derma</h1>
        <p align="right">JM Dermatology</p>
      </div>

      <div className="name">tology
          {/* <img src={Logo}></img> */}
      </div>

      <div className="bottomnav">
        <ul>
          <a href="#introduce">
          <li data-hover="profile">INTRODUCE</li>
          </a>
          <a href="#aboutStory">
          <li data-hover="profile">ABOUT STORY</li>
          </a>
          <a href="#laser">
          <li data-hover="portfolio">LASER THERAPY</li>
          </a>
          <a href="#skin">
          <li data-hover="contact">SKIN DISEASE</li>
          </a>
          <a href="#treatment">
          <li data-hover="contact">TREATMENT</li>
          </a>
          <a href="#cosmetic">
          <li data-hover="contact">SKIN CARE</li>
          </a>
          <div id="collection"></div>
        </ul>
      </div>

      <div className="scrolldown">scroll down</div>   
      <div className="next">up next
      <div className="introduce" id="introduce" ></div> 
      </div>

    </div>
     <div className="contents"> 
     <div className="left1"></div>
    <div className="right1"></div>
    <div className="left2"></div>
    <div className="right2"></div>
    <div className="left3"></div>
    <div className="right3"></div>
    <div className="left4"></div>
    <div className="right4"></div>
    <div className="left5">
      <div className="flower">
          <img src={flower}></img> 
      </div>
    </div>
    <div className="right5"></div>
    <div className="left6"></div>
    <div className="right6"></div>
    <div className="flowerMain">
          <img src={flowerMain}></img> 
      </div>
         <Service/>
     </div>
     <div className="firstMainfooter">   
     <Map/>
         <Footer/>
         </div>
  </div>
</body>

</div>
  );
};

export default Warrap;
