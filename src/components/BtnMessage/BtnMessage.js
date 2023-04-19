import React from "react";
import "./BtnMessage.css";
import { listInfoBtnMessage } from "../../utils/consts";

export default function BtnMessage() {
  let delay = 200;
  let steps = [];
  let open = false;
  let curStep = 0;
  let lastTimeout;

  function openBtns() {
    const buttons = document.querySelector(".demo__buttons");
    const openBtn = document.querySelector(".demo__open-btn");
    if (!open) {
      openBtn.classList.remove("demo__open-btn-pulse");
      animate();
    } else {
      openBtn.classList.add("demo__open-btn-pulse");
      buttons.classList.remove("step-1", "step-0", "step-3", "step-2");
      clearTimeout(lastTimeout);
      open = false;
      curStep = 0;
    }
    for (let i = 0; i <= 2; i++) {
      steps[i] = "demo__step-" + i;
    }
    function setStep(index) {
      buttons.classList.remove("step-1", "step-0", "step-3", "step-2");
      buttons.classList.add("step-" + curStep);
    }
    function animate() {
      open = true;
      if (curStep >= 3) {
        curStep = 0;
        return;
      }
      setStep(curStep);
      curStep++;
      lastTimeout = setTimeout(animate, delay);
    }
  }

  return (
    <div className="demo__buttons">
      <div className="demo__social-btn-1 demo__social-btn">
        <a
          aria-label="Chat on WhatsApp"
          href={listInfoBtnMessage.hrefWhatsapp}
          target="_blank"
          rel="noreferrer"
          className="demo__open-link"
        >
          <img
            alt="Chat on WhatsApp"
            src={listInfoBtnMessage.btnMessageImgWhatsapp}
            className="demo__open-img"
          />
        </a>
      </div>
      <div className="demo__social-btn-2 demo__social-btn">
        <a
          aria-label="call the phone"
          href={listInfoBtnMessage.hrefPhone}
          rel="noreferrer"
          className="demo__open-link"
        >
          <img
            alt="call the phone"
            src={listInfoBtnMessage.btnMessageImgPhone}
            className="demo__open-img"
          />
        </a>
      </div>
      <div className="demo__open-btn demo__open-btn-pulse" onClick={openBtns}>
        <img
          src={listInfoBtnMessage.btnMessageImgQuestion}
          alt="phone"
          className="demo__open-img"
        />
      </div>
    </div>
  );
}
