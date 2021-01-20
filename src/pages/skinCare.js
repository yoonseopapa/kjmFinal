import React from "react";
import { NavLink } from "react-router-dom";
import imgaLogo from "../assets/kjmLogo.png";
import imgaA from "../assets/skinCare.jpg";
import imgaB from "../assets/ice.png";
import imgaC from "../assets/head-min.png";
import playerA from "../assets/skinCare.mp4";
import classes from "../styles/components/BackgroundVideo.scss";
import Map from "../pages/map";
import Footer from "../pages/footer";

const SkinCare = () => {
  window.scrollTo(0, 0) 
  return (
<div>
<body>
<div className="leftBlue"></div>
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
        <li className="treatment">Anti-Aging</li>
        </NavLink>

        
        <a href="#aboutStory">
        <li className="profile">
          <div className="img"></div>
        </li>
        </a>
      </ul>
    </nav>
    <div className="contentTitle">
    </div>
        <div className="scrolldownLeftCon">scroll down</div>
    <div className="gununTitle">
    <div className="contentStroy">
        <p> JM김정민피부과만의 피부관리</p>
        <h1> 치료 Cure</h1>
        <h3>근본적인 치료가 필요합니다.</h3>
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
            <div className="storyCorn">
            <p>Corn/ Verruca</p>   
        <p>티눈/ 사마귀</p>   
        <h2 >사마귀는 인유두종바이러스(Human Papilloma Virus)의 감염으로 인해 발생하는 질환으로 본인의  
        <br/>신체 내에서 번지거나 주변사람에게 전염시킬수 있으므로 반드시 치료가 필요합니다. 반면,티눈은  
        <br/>물리적 자극이나 마찰이 원인이 되어 발생합니다. 즉, 피부의 어떤 부분이 마찰이나 압력을 계속
        <br/>해서 받으면 피부과 헐거나 뚫리는 것을 막기 위해 그 부위를 두껍게 만들어 외부의 힘에 저항하게 
        <br/>됩니다. 이렇게 피부의 각질층이 국소적으로 두꺼워지면 통증이 동반될 수 힘에 저항하게 됩니다.
        <br/>이렇게 피부의 각질층이 국소적으로 두꺼워지면 통증이 동반될 수 있으므로 치료가 필요합니다. 
        </h2>
        <br/>
        <br/>
        </div>
        <div>
          </div>
          </div>
    </div>

    <div className="features acne">
          <div className="rightContents">
          
         <div className="storyAcne">
        <p>BURN</p>   
        <p>화상</p> 
        <h2 >불이나 뜨거운 물, 강산이나 강알칼리 등의 화학물질, 아스팔트에 쓸림, 뜨거운 햇빛에 
        <br/>노출 등의 자극에 의해 피부가 손상된 것을 말합니다. 
        </h2>
        <img className="firstCardAcne" src={imgaB} alt=""/>  
        </div>
        <div className="storyAcne2">
         
        <h2 >병변의 상태에 따라 필요한 경우에는 항생제, 소염제 등의 전신약물치료를 병행하는 것이 
        <br/>필요할 수 있습니다. 가능한 빨리 이물질을 제거하고, 화상병변부위의 소독, 바세린 거즈
        <br/>와  화상연고를 이용하여 2차 감염 및 흉터, 색소 침착등을 방지하는 것이 필요합니다.
        <br/>또한 LED 재생레이저를 통해 화상으로 인한 염증을 개선하고, 흉터와 색소침착을 예방 하
        <br/>면서 손상된 피부의 회복을 촉진시킵니다. 
        </h2>

        </div>
      
        <div>
          </div>
          </div>
    </div>
    <div className="features freckles">
          <div className="rightContents">
            <div className="storyFreckles">
            <p>HERPES ZOSTER</p>   
        <p>대상포진</p>   
        <h2 >피부 뿐만 아니라 면역체계의 회복을 목표로 치료합니다. 
        </h2>
        <img className="firstCardContentsFreck" src={imgaC} alt=""/>
        </div>
        <div className="storyFreckles2">
        <h2 >병변의 상태에 따라 필요한 경우에는 항생제, 소염제 등의 전신약물치료를 병행하는 것이 
        <br/>필요할 수 있습니다. 가능한 빨리 이물질을 제거하고, 화상병변부위의 소독, 바세린 거즈
        <br/>와  화상연고를 이용하여 2차 감염 및 흉터, 색소 침착등을 방지하는 것이 필요합니다.
        <br/>또한 LED 재생레이저를 통해 화상으로 인한 염증을 개선하고, 흉터와 색소침착을 예방 하
        <br/>면서 손상된 피부의 회복을 촉진시킵니다. 
        </h2>
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
