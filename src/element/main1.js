import bg1 from "../img/bg/bg1.png";
import bg2 from "../img/bg/bg2.png";
import bg3 from "../img/bg/bg3.png";
import bg4 from "../img/bg/bg4.png";

function Page1(){
    const backgroundArr = [bg1, bg2, bg3, bg4];
    const bgIndex = Math.floor(Math.random()*backgroundArr.length);
    const chosenBg = backgroundArr[bgIndex];
    document.body.style.backgroundImage = `url(${chosenBg})`;
    return(
        <div>hello</div>
    )
};

export default Page1;