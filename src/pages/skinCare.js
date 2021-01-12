import React from "react";
import { NavLink } from "react-router-dom";
import imgaLogo from "../assets/logoFinal.png";
import imgaA from "../assets/skinCare.jpg";
import imgaB from "../assets/ice.jpg";
import imgaC from "../assets/head-min.jpg";
import playerA from "../assets/skinCare.mp4";
import classes from "../styles/components/BackgroundVideo.scss";
import Map from "../pages/map";
import Footer from "../pages/footer";

const SkinCare = () => {
  return (
<div>
<body>
<div className="leftBlue"></div>
<div className="right"></div>
<nav className="navg">
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
    <div className="contentTitle">
      <p>SKIN CARE</p>
    </div>
        <div className="scrolldownLeftCon">scroll down</div>
    <div className="gununTitle">
    <div className="contentStroy">
        <p> 파스텔만의 피부관리</p>
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
            <div className="story">
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
            <img className="firstCardAcne" src={imgaB} alt=""/>
            <div className="storyAcne">
            <p>BURN</p>   
        <p>화상</p>   
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
          <div className="leftContents">
            <img className="firstCardContents" src={imgaC} alt=""/>
            <div className="story">
            <p>HERPES ZOSTER</p>   
        <p>대상포진</p>   
        <h2 >대상포진은 어렸을 때 수두바이러스에 감염된 적이 있는 사람들에게 면역기능이 약해졌을 때 잠
        <br/>잠복해 있던 바이러스가 신경절을 따라 피부발진과 수포를 유발하는 바이러스질환입니다. 
        <br/>치료법) 유사하게 보이는 질환들과 감별하는 것이 가장 중요하며, 약물치료와 함께 피부에 나타난
        <br/>홍반성 수포, 물집 등의 증상을 잘 관리하여 2차적인 감염을 에방하면서, 초기에 철저한 병변 관
        <br/>리로 흉터를 최소화 하는 것이 중요합니다. 병변부위에 신경차단술을 병행하고, 헬륨네온레이저와 
        <br/>LED파장을 동시에 이용하여 염증과 통증을 줄여주며, 대상포진후 신경통으로의 이행을 예방합니다.
        </h2>
        <br/>
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
