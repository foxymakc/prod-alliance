import React from "react";
import "./BtnUp.css";

export default function BtnUp() {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 400 ||
      document.documentElement.scrollTop > 400
    ) {
      document.getElementById("btn-up").classList.remove("btn-up-hide");
    } else {
      document.getElementById("btn-up").classList.add("btn-up-hide");
    }
  }

  function clickBtnUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <button className="btn-up btn-up-hide" onClick={clickBtnUp} id="btn-up">
      &#11165;
    </button>
  );
}
