import React from "react";
import { NavLink } from "react-router-dom";
import imgaA from "../assets/kjmLogo.png";
import imgaB from "../assets/kakao.png";
import imgaC from "../assets/blog.png";
import imgaD from "../assets/naver.png";
import Cases from "../components/cases";
import Banner from "../components/banner";
import Service from "../components/service"
import Map from "../pages/map";
import Footer from "../pages/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import flower from "../assets/palm-4206654_1920.jpg";
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
        <li className="treatment">Anti-Aging</li>
        </NavLink>

        <NavLink to='/special' exact>
        <li className="special">SPECIAL IN JM</li>
        </NavLink>
      

        <a href="#aboutStory">
        <li className="Profile">
          <div className="img"></div>
        </li>
        </a>
      </ul>
    </nav>

   

    <div className="content">
      <div className="img-wrapper">
      <div className="introduce" id="introduce" ></div> 
    <div className="next1">
      <a href="https://blog.naver.com/seochoskin">Blog</a>
      </div>
      <Banner/>
      </div>
      <div className="info" id="info">
        <ul>
        <Cases/>
        </ul>
      </div>

      <div className="text">
        <h1>자연스러운 아름다움이 시작되는곳</h1>
      </div>

      <div className="name">겉으로 보이는 피부뿐만 아니라 근본적인 피부의 개선으로 보다<br/> 건강하고 아름다운 피부를 위해 세심한 서비스와 시술로 <br/>만족스러운 결과를 보여드리겠습니다. 
  
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
     <div>
     </div>
    </div>
     <div className="contents"> 
     <div className="left1">
     </div>
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
    <div className="right5">
    
    </div>
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
