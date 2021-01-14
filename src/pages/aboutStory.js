import React from "react";
import imgaA from "../assets/profile.jpg";
import imgaLogo from "../assets/logoFinal.png";
import { NavLink } from "react-router-dom";
import Map from "../pages/map";
import Footer from "../pages/footer";


const AboutStroy = () => {

  return (
<div>
<body>
<div className="aboutleft"></div>
<div className="aboutright"></div>
<nav className="navg1">
      <ul>
        <NavLink to='/' exact>
        <img className="logoImage" src={imgaLogo} alt=""/>
        <li className="logo">김정민피부과</li>
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
    <div className="features">
 
          <div className="about">
            <img className="firstCardProfile" width="479" src={imgaA} alt=""/>
        <div>
        <div className="storyZero">
        <strong> 정확한 진단과 책임있는 진료를 약속하는피부과</strong>
        <p>대표원장</p>
        <strong>김정민</strong>
        <br/>
        <br/>
        <span>●&nbsp;원장 약력</span>
        <br/>
        <br/>
        <div className="storyOne">
        <h2> - 한국과학기술원(KAIST) 생명과학과 졸업&nbsp;&nbsp;&nbsp; </h2>
        <h2> - 부산대학교병원 피부과학교실 외래교수&nbsp;&nbsp;&nbsp; </h2>
        <h2> - 퓨린피부과 부원장&nbsp;&nbsp;&nbsp; </h2>
        <h2> - 부산대학교병원 피부과 임상교수&nbsp;&nbsp;&nbsp; </h2>
        <h2> - 대한 피부과학회 지도전문의</h2>
        <h2> - 대한 피부과의사회 정회원</h2>
        <h2> - 대한피부레이저학회 정회원</h2>
        <h2> - 대한피부항노화연구회 정회원</h2>
        <h2> - 대한미용피부외과학회 정회원</h2>
        </div>
        <div className="storyTwo">
        <h2> - 대한여드름학회 정회원</h2>
        <h2> - 대한아토피피부염학회 정회원</h2>
        <h2> - 대한건선학회 정회원</h2>
        <h2> - 대한백반증학회 정회원</h2>
        <h2> - 대한광의학회 정회원</h2>
        <h3> - 대한접촉피부염 및 알레르기학회 정회원</h3>
        <h2> - 대한모발학회 정회원</h2>
        </div>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <span>●&nbsp;학술활동</span>
         <br/>
         <br/>
         <h2>- 피부과 SCI/SCIE급 저널(국제저명학술지) 8편 개제</h2>
         <h2>- 피부과 국내학술지 14편 개제</h2>
        </div>
          </div>
          </div>
         
    </div>
    <div className="aboutfooter">
<Map/>
<Footer/>
</div>
</body>
</div>
  );
};

export default AboutStroy;
