import React from "react";
import { NavLink } from "react-router-dom";
import imgaLogo from "../assets/kjmLogo.png";
import imgaA from "../assets/botox.jpg";
import imgaB from "../assets/thread.jpg";
import imgaC from "../assets/hairloss.jpg";
import playerA from "../assets/skinCare.mp4";
import classes from "../styles/components/BackgroundVideo.scss";
import Map from "../pages/map";
import Footer from "../pages/footer";

const SkinCare = () => {
  window.scrollTo(0, 0) 
  return (
<div>
<body>
<div className="leftGreen"></div>
<div className="right"></div>
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
        <li className="treatment">Treatment</li>
        </NavLink>

        
        <a href="#aboutStory">
        <li className="profile">
          <div className="img"></div>
        </li>
        </a>
      </ul>
    </nav>
    <div className="contentTitle">
      <p>TREATEMENT</p>
    </div>
   
        <div className="scrolldownLeftCon">scroll down</div>
    <div className="gununTitle">
    <div className="contentStroy">
        <p> JM파스텔피부과만의 노하우</p>
        <h1> 시술 Treatment</h1>
        <h3> 시술자에 따른 미세한 차이가 아름다운 변화로 
         <br/>이어집니다</h3>
        <h2 >ㅡㅡㅡ
        <br/>피부과학을 바탕으로 피부를 나아지게 합니다. 
        <br/>겉으로 보이는 부분만이 아니라 근본적인 부분을 
        <br/>해결합니다. 
        </h2>
        </div>
    <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video}>
                <source src={playerA} type="video/mp4" />
            </video>
        </div>
</div>


    <div className="features aging">
          <div className="leftContents">
            <img className="firstCardContents" src={imgaA} alt=""/>
     
            <div className="story">
            <p>BOTOX & DERMOTOXIN</p>   
        <p>보톡스와 더모톡신</p>   
        <h2 >주름Wrinkle ∙ 윤곽개선Face contour & 더모톡신 Dermotoxin
        <br/>시술자의 경험과 섬세함에 따라 결과차이가 많이 날수 있는 가성비가 좋은
        <br/>안티에이징의 기본 치치료라고 생각합니다. 적절한 용량을 적당한 위치에
        <br/>잘 놓는다면, 주름뿐만 아니라 얼굴의 윤곽개선, 모공이나 흉터의 개선 등의
        <br/>다양한 효과를 낼 수 있습니다. 얼굴뿐만 아니라 승모근, 허벅지, 종아리의 
        <br/>비대해진 근육감소와 편두통의 치료에도 응용 가능합니다.
        </h2>
        <br/>
        </div>
        <div>
          </div>
          </div>
    </div>

    <div className="features acne">
          <div className="rightContents">
            <img className="firstCardAcne" src={imgaC} alt=""/>
            <div className="storyAcneTr">
            <p>BRIGHTENING LIFTING</p>   
        <h2>히알루론산 Hyaluronic acid<br/>리쥬란힐러 PDRN polydeoxyribonucleotide<br/>쥬베룩 PLA poly D, L-lactide </h2>   
        <h2 >촉촉한 피부로 개선시켜 주는 시술입니다. 섬세하고 정확하게, 피부에 주입하는 것은
        <br/>기계를 통해 자동식으로 피부에 주입하는 것보다 장점이 많고, 시술자의 숙련된 스킬
        <br/>과 경험에 따라 결과의 차이도 경험할 수 있습니다. 
        <br/>리쥬란힐러는 PDRN(polydeoxyribonucleotide)성분으로 우리 몸의 DNA합성을 도와주
        <br/>는 역할로, 피부의 자가 치유능력을 활성화시키고, 피부 속 진피층의 환경을 개선하여
        <br/>노화로 인한 다양한문제인 주름이나 모공, 각질, 탄력저하 등이 복합적으로 개선되는  
        <br/>효과를 보이게 됩니다.쥬베룩(Jeuvelook)은 피부세포의 근본적인 재생을 도와 피부 속
        <br/>부터 건강하게 활성화를 유도하여 젊고 건강한 피부로 되돌려주는 새로운 개념의 콜라겐
        <br/>부스터입니다. 생분해성 고분자인 PLA(Poly D, L-lactide) 미세입자와 히알루론산을 
        <br/>결합한 자가콜라겐재생주사로 잔주름, 모공개선, 피부 피부보습 등 시간이 지날수록오
        <br/>랫동안 자연스럽게 유지할 수 있습니다. 
        </h2>
        </div>
        
        <div>
          </div>
          </div>
    </div>

    <div className="features lifting">
          <div className="leftContents">
            <img className="firstCardSecond" src={imgaB} alt=""/>
            <div className="story">
            <p>BOTOX & DERMOTOXIN</p>   
        <p>보톡스와 더모톡신</p>   
        <h2 >주름Wrinkle ∙ 윤곽개선Face contour & 더모톡신 Dermotoxin
        <br/>시술자의 경험과 섬세함에 따라 결과차이가 많이 날수 있는 가성비가 좋은
        <br/>안티에이징의 기본 치치료라고 생각합니다. 적절한 용량을 적당한 위치에
        <br/>잘 놓는다면, 주름뿐만 아니라 얼굴의 윤곽개선, 모공이나 흉터의 개선 등의
        <br/>다양한 효과를 낼 수 있습니다. 얼굴뿐만 아니라 승모근, 허벅지, 종아리의 
        <br/>비대해진 근육감소와 편두통의 치료에도 응용 가능합니다.
        </h2>
        <br/>
        </div>
        <div>
          </div>
          </div>
    </div>

    <div className="laserfooter">
<Map/>
<Footer/>
</div>
</body>
</div>
  );
};

export default SkinCare;
