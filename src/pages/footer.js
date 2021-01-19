import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
        <section className='footerMain'>
      <div className='footerContainer'>
        <div className='footerRow'>
            <div className='footerLine'>
              <p className="ment"> COMPANY:JM김정민피부과/ OWNER:김정민/사업자등록번호:226-12-61709 </p>
              <p className="ment"> ADDRESS:(도로명) 서울시 서초구 사임당로 158, 래미안리더스원상가 3층 &nbsp;TEL:02-6953-1212&nbsp;FAX:02-6953-5566 </p>
              <p className="ment"> Copyright by JM김정민피부과. All rights reserved</p>
              <NavLink to='/price' exact>
              <p className="ment"> 비급여 항목</p>
              </NavLink>
            </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Footer;
