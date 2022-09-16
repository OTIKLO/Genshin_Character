import "./Welcome.css";

function Welcome(){
    const backgroundArr = [bg1, bg2, bg3, bg4];
    const bgIndex = Math.floor(Math.random()*backgroundArr.length);
    const chosenBg = backgroundArr[bgIndex];
    document.body.style.backgroundImage = `url(${chosenBg})`;
    return (
        <div>1</div>
    );
};
export default Welcome;