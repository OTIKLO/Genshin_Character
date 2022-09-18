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

# 학습 내용

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


## React 라이브러리

### Reactjs VideoBG

+ 배경에 동영상 넣기

```
npm i -S reactjs-videobg
```

```java
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

```java
import ReactAudioPlayer from "react-audio-player";
//...
    <ReactAudioPlayer
        src= {maintheme}
        autoPlay={true}
        >
    </ReactAudioPlayer>
```
