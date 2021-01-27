import React, { useState } from "react";
import imgaA from "../assets/popup.jpg";
const PopUp = ({ idMessage }) => {
  // create state `open` with default as false
  const [open, setOpen] = useState(true);
  return (
    <>
      {/* click of button toggles `open` value therefore visibility */}
     
      {/* If open is true show your <div /> */}
      {open && (
        <div
          className="modal fade"
          id={idMessage}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
        <img className="popuptest" src={imgaA} alt=""/>
        <button
        onClick={() => setOpen(!open)}
        type="button"
        className="popupButton"
        data-toggle="modal"
        data-target={`#${idMessage}` }
      >
       닫기
      </button>
        </div>
      )}
    </>
  );
};

export default PopUp;