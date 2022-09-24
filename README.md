# 학습을 위한 사이트 만들어보기

개인적인 학습을 위해 즐겨 하는 게임인 원신을 배경으로 사이트를 개발해 보고 있습니다.

## 사용 언어
<img src="https://img.shields.io/badge/Javascript-F3DD16?style=flat-square&logo=JavaScript&logoColor=white"/></a>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/></a>
<img src="https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=CSS3&logoColor=white"/></a>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/></a>

## 사용 도구
<p>
  <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat-square&logo=Visual Studio Code&logoColor=white"/></a>
</p>
  
<br>
<br>
  

  
# 학습 내용

## JAVASCRIPT 관련

### 딜레이 (일정 시간 후 작동)
```javascript
setTimeout(() => {
  {코드내용};
}, `dlay 시킬 초`);
```

### 버튼 클릭으로 페이지 이동
```javascript
function handleClick(e) {
  window.location.href = "/{페이지}";
};
```

<br>

---------------------

<br>

## HTML 관련

### 오디오 넣기
```html
  <audio autoPlay="autoplay" loop>
    <source src={maintheme} type="audio/mp3" />
  </audio>
```

<br>

---------------------

<br>

## CSS 관련

### 애니메이션 ( transition )
>속성을 서서히 변화시키는 속성  
```css
transition: property timing-function duration delay | initial | inherit
```
#### property : transition을 적용시킬 속성을 정합니다.  
+ none : 모든속성에 적용하지 않습니다.  
+ all : 모든속성에 적용합니다.  
+ property : 속성을 정합니다. 여러개일 경우 쉼표로 구분합니다. width, background-color ...  
+ initial : 기본값으로 설정합니다.  
+ inherit : 부모 요소의 속성값을 상속받습니다.  

#### timing-function : transition의 진행 속도를 정합니다.  
#### duration : transition의 총 시간을 정합니다.  
#### delay : transition의 시작을 연기합니다.  
#### initial : 기본값으로 설정합니다.  
#### inherit : 부모 요소의 속성값을 상속받습니다.  

### 애니메이션 ( @keyframes, animation )

```css
@keyframes {이름} {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
```
+ animation-name: @keyframes 이름
+ animation-duration: 타임프레임 길이. 애니메이션 시작부터 마지막까지 총 지속시간
+ animation-timing-function: 애니메이션 속도 조절 ( linear | ease | ease-in | ease-out | ease-in-out | cubic-bezier ).
+ animation-delay: 애니메이션이 시작하기 전 지연시간
+ animation-iteration-count: 반복 횟수
+ animation-direction: 루프 (loop) 방향. 정방향으로 반복, 역방향으로 반복, 번갈아가며 반복 등을 설정
+ animation-fill-mode: 애니메이션 시작/끝 상태 제어 ( none | forwards | backwards | both )

<br>

---------------------

<br>

## React 라이브러리

### Reactjs VideoBG

+ 배경에 동영상 넣기

```
npm i -S reactjs-videobg
```

```javascript
import VideoBg from "reactjs-videobg";
//...
    <VideoBg poster={bg4}>
      <VideoBg.Source src={mp4} type="video/mp4" />
    </VideoBg>
```

### React Audio Player

+ 리액트에서 음악플레이어 사용

```
npm install react-audio-player
```

```javascript
import ReactAudioPlayer from "react-audio-player";
//...
    <ReactAudioPlayer
        src= {maintheme}
        autoPlay={true}
        >
    </ReactAudioPlayer>
```

<br>

------------------------

<br>

# 핵심 코드

### 1. 스크롤 페이징

```javascript
const DIVIDER_HEIGHT = 5;
...
function Main(){
  const outerDivRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);
  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

      if (deltaY > 0) {   // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {   //현재 1페이지
          console.log("현재 1페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {   //현재 2페이지
          console.log("현재 2페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {   // 현재 3페이지
          console.log("현재 3페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(4);
        } else {    // 현재 4페이지
          console.log("현재 4페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 4 + DIVIDER_HEIGHT * 4,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(4);
        }
      } else {    // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {   //현재 1페이지
          console.log("현재 1페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {   //현재 2페이지
          console.log("현재 2페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {   // 현재 3페이지
          console.log("현재 3페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else {    // 현재 4페이지
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
...
}
```
### 1-1. 스크롤 페이지 점 표시 -> 이미지 표시

```javascript
  <Dots scrollIndex={scrollIndex} />
---------------------------------------
import doff from "../img/icon/Dot_off.png"; //이미지 off
import don from "../img/icon/Dot_on.png"    //이미지 on

const Dot = ({ num, scrollIndex }) => {   // 점 자체의 꺼짐, 켜짐
  let dsrc = doff;
  if (scrollIndex === num) {
    dsrc = don;
  } else {
    dsrc = doff;
  }
  return (
    <div style={{
      width: 10,
      height: 10,
      transitionDuration: 1000,
      transition: "background-color 0.5s",
    }}>
      <img src={dsrc} alt="img"></img>
    </div>
  );
};

const Dots = ({ scrollIndex }) => {     // 점들을 배치
  return (
    <div style={{ position: "fixed", top: "35%", right: 100 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          width: 20,
          height: 300,
        }}
      >
        <Dot num={1} scrollIndex={scrollIndex}></Dot>   //페이지 만큼 
        <Dot num={2} scrollIndex={scrollIndex}></Dot>
        <Dot num={3} scrollIndex={scrollIndex}></Dot>
        <Dot num={4} scrollIndex={scrollIndex}></Dot>
      </div>
    </div>
  );
};

export default Dots;

```


### 2. 페이지를 볼 때 애니메이션 작동

```javascript
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
```

```html
  <div ref={outerDivRef} className="outer">
    <Dots scrollIndex={scrollIndex} />
    <div className="inner bg1">
    
    </div>
    <div className="divider"></div>
    <div className="inner bg2">
    
    </div>
    <div className="divider"></div>
    <div className="inner bg3">
    
    </div>
    <div className="divider"></div>
    <div className="inner bg4">
    
    </div>
  </div>
```

### 3. 배경 소리 음소거

```javascript
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
```

### 4. Bird 애니메이션

```javascript
function Bird(){
    return (
        <div>
            <div className="bird-container bird-container--one">
                <div className="bird bird one"></div>
            </div>

            <div className="bird-container bird-container--two">
                <div className="bird bird two"></div>
            </div>

            <div className="bird-container bird-container--three">
                <div className="bird bird three"></div>
            </div>

            <div className="bird-container bird-container--four">
                <div className="bird bird four"></div>
            </div>
        </div>
    );
};

export default Bird;
```

```html

@keyframes motion {
	0% {margin-top: 0px;}
	100% {margin-top: 10px;}
}
@import url('https://fonts.googleapis.com/css?family=Arima+Madurai:300');

*,
*::before,
*::after {
	box-sizing: border-box;
}

.container {
	z-index: 1;
	position: relative;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	min-height: 35rem;
	background-image: linear-gradient(to bottom,  rgba(255,168,76,0.6) 0%,rgba(255,123,13,0.6) 100%), url('https://images.unsplash.com/photo-1446824505046-e43605ffb17f');
	background-blend-mode: soft-light;
	background-size: cover;
	background-position: center center;
	padding: 2rem;
}

.bird {
	background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells-new.svg);
	background-size: auto 100%;
	width: 88px;
	height: 125px;
	will-change: background-position;
	
    animation-name: fly-cycle;
	animation-duration: 1s;
	animation-delay: -2s;
	animation-timing-function: steps(10);
	animation-iteration-count: infinite;
}

.bird-container--one {
	animation-duration: 1s;
	animation-delay: -0.5s;		
}
	
.bird-container--two {
	animation-duration: 0.9s;
	animation-delay: -0.75s;
}
	
.bird-container--three {
	animation-duration: 1.25s;
	animation-delay: -0.25s;
}
	
.bird-container--four {
	animation-duration: 1.1s;
	animation-delay: -0.5s;
}



.bird-container {
	position: absolute;
	top: 1%;
	left: -10%;
	transform: scale(0) translateX(-10vw);
	will-change: transform;
	
	animation-name: fly-right-one;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
	animation-delay: 6s;
}
.bird-container--one {
	animation-duration: 9s;
	animation-delay: 0;
}

.bird-container--two {
	top: 5%;
	animation-duration: 8s;
	animation-delay: 1s;
}
	
.bird-container--three {
	top: 10%;
	animation-duration: 9s;
	animation-delay: 9.5s;
}
	
.bird-container--four {
	top: 15%;
	animation-duration: 16s;
	animation-delay: 10.25s;
}

@keyframes fly-cycle {
	100% {
		background-position: -900px 0;
	}
}

@keyframes fly-right-one {
	0% {
		transform: scale(0.3) translateX(-10vw);
	}
	10% {
		transform: translateY(2vh) translateX(10vw) scale(0.4);
	}
	20% {
		transform: translateY(0vh) translateX(30vw) scale(0.5);
	}
	30% {
		transform: translateY(4vh) translateX(50vw) scale(0.6);
	}
	40% {
		transform: translateY(2vh) translateX(70vw) scale(0.6);
	}
	50% {
		transform: translateY(0vh) translateX(90vw) scale(0.6);
	}
	60% {
		transform: translateY(0vh) translateX(110vw) scale(0.6);
	}
	100% {
		transform: translateY(0vh) translateX(110vw) scale(0.6);
	}
}

@keyframes fly-right-two {
	0% {
		transform: translateY(-2vh) translateX(-10vw) scale(0.5);
	}
	10% {
		transform: translateY(0vh) translateX(10vw) scale(0.4);
	}
	20% {
		transform: translateY(-4vh) translateX(30vw) scale(0.6);
	}
	30% {
		transform: translateY(1vh) translateX(50vw) scale(0.45);
	}
	40% {
		transform: translateY(-2.5vh) translateX(70vw) scale(0.5);
	}
	50% {
		transform: translateY(0vh) translateX(90vw) scale(0.45);
	}
	51% {
		transform: translateY(0vh) translateX(110vw) scale(0.45);
	}
	100% {
		transform: translateY(0vh) translateX(110vw) scale(0.45);
	}
}
```
