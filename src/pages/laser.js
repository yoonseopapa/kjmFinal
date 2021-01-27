import React from "react";
import { NavLink } from "react-router-dom";
import imgaLogo from "../assets/kjmLogo.png";
import imgaA from "../assets/mainlaser.png";


import imgaB from "../assets/freckles.png";
import imgaC from "../assets/acne.jpg";
import imgaD from "../assets/pore.jpg";
import playerA from "../assets/snowflakes.mp4";
import classes from "../styles/components/BackgroundVideo.scss";
import Map from "../pages/map";
import Footer from "../pages/footer";



const Laser = () => {
  window.scrollTo(0, 0) 
  return (
<div>
<body>
<div className="leftPink"></div>
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
    <div className="contentTitle">
    </div>
        <div className="scrolldownLeftCon">scroll down</div>
    <div className="gununTitle">
    <div className="contentStroy">
        <p> JM김정민피부과만의 전문성</p>
        <h1> Laser 치료</h1>
        <h3>정확한 진단과 치료는 피부과전문의의 전문분야 입니다.</h3>
        <h2 >ㅡㅡㅡ
        <br/>개개인의 얼굴타입의 분석을 바탕으로 진단이 
        <br/>정확해야 효과적인 치료,좋은 결과로 이어질수 
        <br/>있습니다.
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
            <div className="storyCombination">
        <p>COMBINATION TREATMENT PROGRAM</p>   
        <p>복합치료 프로그램</p>   
        <h2 > 모든 사람은 개인이 타고난 피부와 피부에 있는 병변의 종류가 모두 다릅니다. 나아가 한 개인의 
        <br/>피부상태도 매일의 컨디션과 호르몬 등에 따라 다를 수 있습니다. 하지만 ‘레이저 10회’ 와 같이 
        <br/>획일화된 치료보다는 정확하고 정교한 전문의의 경험과 치료가 추가되어야 한다고 생각합니다. 
        <br/>결과를 얻을 수 있습니다. 나의 피부 상태를 분석하고 병변에 정확하고 섬세한 치료를 통해 피부
        <br/>피부의 변화를 느낄 수 있게 될 것입니다.
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
            <img className="firstCardAcneLaser" src={imgaB} alt=""/>
            <div className="storyAcnePigment">
            <p>PIGMENTATION </p>   
        <p>색소 </p>   
        <h2 > 맑고 깨끗한 피부를 위해서는 다양한 치료를 적절하게 조합하면 결과를 극대화할 수 있습니다.  
        <br/>흔히들 이야기하는 레이저 토닝은 치료테크닉의 이름이며, 기계적으로 모든 사람에게 같은 레이
        <br/>저로 같은 에너지로 시술하는 것을 지양합니다. 잡티의 종류는 무엇인지, 어떤 피부인지를 파악하
        <br/>고 1:1로 맞춤치료와 같이 계획하고 치료합니다. 피부 톤에 영향을 줄 수 있는 다양한 파장의 레
        <br/>이저 복합 치료와 레이저 전, 후의 관리뿐만 아니라 매일 사용하는 화장품 확인을 비롯한 생활습
        <br/>관 교정 또한 아주 중요합니다. 
        </h2>
        </div>
        
        <div>
          </div>
          </div>
    </div>
    <div className="features freckles">
          <div className="leftContents">
            <img className="firstCardContents" src={imgaC} alt=""/>
            <div className="storyFeckles">
        <p>ACNE/ ERYTHEMA, PIGMENTATION, SCAR</p>   
        <p>여드름/ 붉은자국, 색소, 여드름흉터 </p>   
        <h2 >여드름은 조기치료가 늦어지게 될 경우 최소 붉은자국이나 색소침착, 패인흉터로 연결될수 있기
        <br/>때문에 가급적 빠르고 적극적으로 치료를 받는 것이 가장 중요합니다. 
        <br/>자주 내원할 수 없고, 시간적으로 여유가 없는 학생이나 바쁜 직장인의 경우 각질층에 쌓인 노폐
        <br/>물을 정리하고 매끈한 피부를 만드는 기본 여드름 치료가 도움이 될 수 있습니다. 
        <br/>예방적으로는 여드름의 발생을 줄일 수 있는 광역동치료(Photodynamic therapy, PDT)를 병행
        <br/>하면더 좋은 결과를 기대할 수 있습니다. 
        </h2>
        <br/>
        <br/>
        </div>
        <div>
          </div>
          </div>
    </div>
    <div className="features tightening">
          <div className="rightContents">
            <img className="firstCardTightening" src={imgaD} alt=""/>
            <div className="storytightening">
            <p>TIGHTENING/ PORE  </p>   
        <p>탄력/ 모공</p>   
        <h2 >피부의 모공이나 흉터는 피지분비가 많아지면서 도드라지기도 하지만, 노화에 따른 피부 탄력저 
        <br/>하에 의해서도 생깁니다. 모양과 분포에 따라 원인을 정확히 파악하여 유수분 밸런스의 조절,
        <br/>피부 탄력회복을 위한 고주파레이저, 초음파, CROSS 도트필링, 리쥬란힐러, 쥬베룩 등으로 치료합니다
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

export default Laser;
