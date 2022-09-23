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

### 스크롤 페이징

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

### 페이지를 볼 때 애니메이션 작동

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
