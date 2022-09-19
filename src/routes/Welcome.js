import "./Welcome.css";
import Bird from "../element/Bird";
import VideoBg from "reactjs-videobg";
import mp4 from "../video/screen.mp4";
import logo from "../img/icon/genshinlogo.png";
import touch from "../img/icon/touch.png"
import maintheme from "../music/g_main_theme.mp3";

function Welcome() {
    function handleClick(e) {
        window.location.href = "/main";
    };
    return (
        <div className="fadeindiv">
            <div>
                <div>
                    <VideoBg>
                        <VideoBg.Source src={mp4} type="video/mp4" className="vdbg" />
                    </VideoBg>
                    <button onClick={handleClick} ></button>
                    <img src={logo} className="logo" alt="img"></img>
                    <img src={touch} className="touch" alt="img" onClick={handleClick}></img>
                    <audio autoplay="autoplay" loop>
                        <source src={maintheme} type="audio/mp3" />
                    </audio>
                </div> 
            </div>
            <Bird />
        </div>
    );
};
export default Welcome;