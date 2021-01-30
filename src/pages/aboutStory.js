import React from "react";
import imgaA from "../assets/profile.jpg";
import imgaLogo from "../assets/kjmLogo.png";
import { NavLink } from "react-router-dom";
import Map from "../pages/map";
import Footer from "../pages/footer";


const AboutStroy = () => {
  window.scrollTo(0, 0) 
  return (
<div>
<body>
<div className="aboutleft"></div>
<div className="aboutright"></div>
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
        <h2> - 대한접촉피부염 및 알레르기학회 정회원</h2>
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
         <br/>
         <span>●&nbsp;학술발표</span>
         <br/>
         <br/>
         <h2>-&nbsp;대한피부과학회 우수연재발표상 수상경력 및 미국피부과학회 (American Academy of Dermatology)</h2>
         <h2>-&nbsp;세계모발연구학회(World Congress for Hair research), 세계알레르기학회 (World Allergy Congress)</h2>
         <h2>-&nbsp;세계피부미용외과학회 (International Society for Dermatologic and Aesthetic Surgery)</h2>
        <h2>-&nbsp;동아시아피부과학회(Eastern Asia Dermatology Congress), 대한피부과학회 등 국내외 학술발표 총 35회
         </h2>
        </div>
          </div>
          </div>
         
    </div>
    <div className="storyThree">
    
    <p className="storyText">학술 내용</p>
    <table>
    <thead>
       
      </thead>
      <tbody>
        <tr>
          <td>1</td><td>Dermatol </td><td>1	J Dermatol 	Circumcised foreskin may be useful as a donor tissue during an autologous, non-cultured, epidermal cell transplantation for the treatment of widespread vitiligo</td>
        </tr>
        <tr>
          <td>2</td><td>Kor J Dermatol </td><td>Zosteriform Atrophoderma of Pasini and Pierini</td>
        </tr>
        <tr>
          <td>3</td><td>Ann Allergy Asthma Immunol</td><td>Clarifying the transmission route of Staphylococcus aureus colonizing the skin in early childhood atopic dermatitis.</td>
        </tr>
        <tr>
          <td>4</td><td>Kor J Dermatol </td><td>A Case of Incomplete Kawasaki Disease: BCG Site Change as a Diagnostic Clue</td>
        </tr>
        <tr>
          <td>5</td><td>Kor J Dermatol </td><td>LEOPARD Syndrome with PTPN11 Gene Mutation</td>
        </tr>
        <tr>
          <td>6</td><td>Ann Dermatol </td><td>Potential Immunoinflammatory Role of Staphylococcal Enterotoxin A in Atopic Dermatitis: Immunohistopathological Analysis and in vitro Assay</td>
        </tr>
        <tr>
          <td>7</td><td>Ann Dermatol </td><td>Silver Woman and Silver Man after Ingestion of Silver Solution: How about Silver Mouse?</td>
        </tr>
        <tr>
          <td>8</td><td>J Am Acad Dermatol </td><td>Dermoscopy of a Sister Mary Joseph nodule</td>
        </tr>
        <tr>
          <td>9</td><td>Br J Dermatol </td><td>Features of Staphylococcus aureus colonization in patients with nummular eczema</td>
        </tr>
        <tr>
          <td>10</td><td>Eur J Dermatol </td><td>Eur J Dermatol 
Effects of topical application of a recombinant staphylococcal enterotoxin A on DNCB and dust mite extract-induced atopic dermatitis-like lesions in a murine model.
</td>
        </tr>
        <tr>
          <td>11</td><td>Korean J Dermatol </td><td>Clinical Characteristics of Acral Fibrokeratoma </td>
        </tr>
        <tr>
          <td>12</td><td>Korean J Dermatol </td><td>Patch Testing to Determine Causative Contact Allergens in Patients with Periocular Dermatitis</td>
        </tr>
        <tr>
          <td>13</td><td>Korean J Dermatol </td><td>Mycobacterium massiliense Infection after Liposuction </td>
        </tr>
        <tr>
          <td>14</td><td>Korean J Dermatol </td><td>Efficacy and Safety of Ustekinumab in the Treatment of Moderate to Severe Psoriasis in Korea</td>
        </tr>
        <tr>
          <td>15</td><td>Korean J Dermatol </td><td>Simple Excision for Skin Tumor without Diagnostic Evaluation: What Are the Problems If It Is Malignant?</td>
        </tr>
        <tr>
          <td>16</td><td>Korean J Dermatol </td><td>Clinicohistopathological Study of Multiple Basal Cell Carcinomas: A Single-center Study</td>
        </tr>
        <tr>
          <td>17</td><td>Korean J Dermatol </td><td>Clinical Characteristics of Psoriatic Arthritis among Korean Patients with Psoriasis: A Single Center Experience</td>
        </tr>
        <tr>
          <td>18</td><td>Korean J Dermatol </td><td>Telangiectasia Occurred after Neonatal Lupus Erythematosus</td>
        </tr>
        <tr>
          <td>19</td><td>Korean J Dermatol </td><td>Co-existence of Extramammary Paget’s Disease and Condyloma Accuminatum and Their Co-relation/ </td>
        </tr>
        <tr>
          <td>20</td><td>Korean J Dermatol </td><td>A Case of Hereditary Benign Telangiectasia without Family History</td>
        </tr>
      </tbody>
      </table>
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
