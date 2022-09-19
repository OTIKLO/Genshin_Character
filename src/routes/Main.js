import { useState, useEffect, useRef } from "react";
import Dots from "../element/Dots.js";
import "./Main.css";
import maintheme from "../music/g_main_theme.mp3";
import img1 from "../img/character/raiden.webp";
import moff from "../img/icon/Dot_off.png";
import mon from "../img/icon/Dot_on.png"

const DIVIDER_HEIGHT = 5;

function Main() {
  const outerDivRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);
  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          // 현재 3페이지
          console.log("현재 3페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(4);
        } else {
          // 현재 4페이지
          console.log("현재 4페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 4 + DIVIDER_HEIGHT * 4,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(4);
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          // 현재 3페이지
          console.log("현재 3페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else {
          // 현재 4페이지
          console.log("현재 4페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        }
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  const options = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: .5,  // 50%가 viewport에 들어와 있어야 callback 실행
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  }, options);

  const titleList = document.querySelectorAll('img');

  titleList.forEach(el => observer.observe(el));

  const divList = document.querySelectorAll('div, .AF');

  divList.forEach(el => observer.observe(el));

  const [musics, setMusics] = useState(true);
  let mbtn = mon;
  function muteOnClick() {
      const music = document.querySelector(".music");
      const mute = document.querySelector(".mute");
      if (musics === true) {
        mute.src = moff;
        setMusics(false);
        music.volume = 0;
        console.log("소리줄임");
      } else {
        mute.src = mon;
        setMusics(true);
        music.volume = 1;;
        console.log("소리켬");
      }
  };
  /*useEffect(()=>{
    const chsrc = document.querySelector(".imgraiden");
    const backgroundArr = [img1, logo, img1, logo];
    const randomIndex = Math.floor(Math.random() * backgroundArr.length);
    const backgroundImg = backgroundArr[randomIndex];
    console.log(backgroundImg);
    chsrc.src = (backgroundImg);
  }, []);*/
  
  return (
    <div ref={outerDivRef} className="outer">
      <audio autoPlay="autoplay" loop className="music">
        <source src={maintheme} type="audio/mp3" />
      </audio>
      <Dots scrollIndex={scrollIndex} />
      <img src={mbtn} alt="음소거이미지" className="mute" onClick={muteOnClick}></img>
      <div className="inner bg1">

      </div>
      <div className="divider"></div>
      <div className="inner bg2">
        <img src={img1} className="leftright imgraiden" alt="img"></img>
        <div className="AF">
          <input type={"text"} placeholder="입력"></input>
        </div>
      </div>
      <div className="divider"></div>
      <div className="inner bg3">3</div>
      <div className="divider"></div>
      <div className="inner bg4">4</div>
    </div>
  );
}

export default Main;
