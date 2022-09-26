import { useEffect } from "react";
import "./Welcome.css";
import "./Welcome";
import loadingbg from "../img/bg/loading.jpg";

function Startloading() {
    useEffect(() => {
        setTimeout(() => { window.location.href = "/Genshin_Character/Welcome"; clearTimeout()}, 5000);
    });
    return (
        <div className="fadeindiv">
            <img src={loadingbg} alt="로딩에 실패했습니다."style={{width:"100vw", height:"100vh", objectFit: "cover"}}></img>
        </div>
    );
}
export default Startloading;