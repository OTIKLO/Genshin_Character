import "./Welcome.css";
import VideoBg from "reactjs-videobg";
import mp4 from "../video/screen.mp4";
import bg4 from "../img/bg/bg4.png";

function Welcome() {
    function handleClick(e) {
        window.location.href = "/main";
    };
    return (
        <div>
            <div>
                <VideoBg poster={bg4}>
                    <VideoBg.Source src={mp4} type="video/mp4" />
                </VideoBg>
                <button onClick={handleClick} ></button>
            </div>
            <div class="bird-container bird-container--one">
                <div class="bird bird one"></div>
            </div>

            <div class="bird-container bird-container--two">
                <div class="bird bird two"></div>
            </div>

            <div class="bird-container bird-container--three">
                <div class="bird bird three"></div>
            </div>

            <div class="bird-container bird-container--four">
                <div class="bird bird four"></div>
            </div>
        </div>
    );
};
export default Welcome;