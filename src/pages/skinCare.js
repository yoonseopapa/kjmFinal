import React from "react";
import { NavLink } from "react-router-dom";
import imgaLogo from "../assets/kjmLogo.png";
import imgaA from "../assets/skinCare.jpg";
import imgaB from "../assets/ice.jpg";
import imgaC from "../assets/head-min.jpg";
import imgaD from "../assets/tinea.jpg";
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
         
        <h2 >병변의 상태에 따라 필요한 경우에는 항생제, 소염제 등의 전신약물치료를 병행하는 것이 필요할 수 있습니다. 
        <br/>가능한 빨리 이물질을 제거하고, 화상병변부위의 소독, 바세린 거즈와  화상연고를 이용하여 2차 감염 및 흉터, 색소 침착등을 방지하는 것이 필요합니다.
        <br/>또한 LED 재생레이저를 통해 화상으로 인한 염증을 개선하고, 흉터와 색소침착을 예방 하면서 손상된 피부의 회복을 촉진시킵니다. 
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
        <h2 >병변의 상태에 따라 필요한 경우에는 항생제, 소염제 등의 전신약물치료를 병행하는 것이 필요할 수 있습니다. 
        <br/>가능한 빨리 이물질을 제거하고, 화상병변부위의 소독, 바세린 거즈와  화상연고를 이용하여 2차 감염 및 흉터, 색소 침착등을 방지하는 것이 필요합니다.
        <br/>또한 LED 재생레이저를 통해 화상으로 인한 염증을 개선하고, 흉터와 색소침착을 예방 하면서 손상된 피부의 회복을 촉진시킵니다. 
        <br/>

        </h2>
        </div>
        <div>
          </div>
          </div>
    </div>

    <div className="features acne">
          <div className="rightContents">
            <img className="firstCardtinea" src={imgaD} alt=""/>
            <div className="storyAcneTinea">
            <p>TINEA </p>   
        <p>무좀 </p>   
        <h1>가렵고 불편한 곰팡이 감염증! 감염률이 높기 때문에 가족, 주변사람들을 위해 치료하는 것이 좋습니다. </h1>

        <h2 >
        <br/>피부사상균(DERMATOPHYTE)이 피부의 가장 바깥층인 각질층이나 손발톱 등에 감염되는 표재성
        <br/>감염을 통틀어서 일컫는 말입니다. 얼굴, 두피, 사타구니, 발가락 사이, 발톱 등 다양한 부위가 감
        <br/>염될 수 있으며, 발백선은 흔히 무좀이라고 불리는 질환입니다. 정확한 진단없이 무좀약을 섣불리 
        <br/>복용하는 것은 질환의 치료에도 크게 도움되지 않으며, 오히려 치료기간을 연장시키거나 병변의 
        <br/>모습을 변형시킬수 있으므로 주의가 필요합니다. 비슷하게 보이는 여러 질환과의 감별을 위해서
        <br/>는 무좀검사(KOH test), 우드등 검사가 필요하며 숙련된 피부과전문의에게 정확히 진단받고 제대
        <br/>된 치료를 받는 것이 무엇보다 중요합니다. 
        </h2>
        </div>
        
        <div>
          </div>
          </div>
    </div> 

    <div className="features aging">
          <div className="leftContents">
            <img className="firstCardAtopic" src={imgaA} alt=""/>
            <div className="storyCornAtopic">
            <p>Corn/ Verruca</p>   
        <p>티눈/ 사마귀</p>   
        <h1>연령별, 증상별로 원인과 치료법이 다르기 때문에 피부상태에 따른 맞춤치료를 시행합니다.  </h1>
        <h2 >아토피피부염은 여러 가지 알레르기 유발물질에 대해 민감하고 큰 이상반응을 나타내면서 심한 
        <br/>가려움증이 동반되는 만성피부질환입니다. 피부 장벽의 기능에 중요한 성분인 세라마이드가 부족
        <br/>하여 피부가 쉽게 민감해지고 건조하여 염증으로 연결될 수 있습니다. 지루성피부염은 만성적인 
        <br/>염증성 피부질환이며 보통 유전적요인, 피지선의 이상, 곰팡이 균의 활동, 환경적∙정신적 문제 등
        <br/>등으로 보고 있습니다. 피지선의 비정상적인 분비로 인해 탈모로 연결되는 경우에는 염증, 가려움증, 
        <br/>비듬과 함께 통증과 악취를 유발하기도 합니다. 두 질환모두 치료가 끝났다고 해서 모두 끝나는
        <br/>것이 아닙니다. 재발률이 높기 때문에 지속적인 관리가 무엇보다 중요합니다. 적절한 보습제와 클
        <br/>렌저의 사용, 초음파 수분관리, 피부 재생관리를 통해 철저한 관리가 지속적으로 필요합니다. 
        </h2>
        <br/>
        <br/>
        </div>
        <div>
          </div>
          </div>
    </div>

    <div className="tagColor1"></div>
    <div className="tagColor2"></div>
    <div className="tagColor3"></div>
    <div className="tagColor4"></div>
    <div className="tagColor5"></div>
    <div className="laserfooter">
<Map/>
<Footer/>
</div>
</body>
</div>
  );
};

export default SkinCare;
