import Ballad1 from "./icon/skillbook/Ballad1.png";
import Ballad2 from "./icon/skillbook/Ballad2.png";
import Ballad3 from "./icon/skillbook/Ballad3.png";
import { useState } from "react";
import tran from "./icon/skillbook/tran.png";

let sk1_1 = Ballad1;
let sk1_2 = Ballad2;
let sk1_3 = Ballad3;
let sk2_1 = Ballad1;
let sk2_2 = Ballad1;
let sk2_3 = Ballad1;
let sk3_1 = Ballad1;
let sk3_2 = Ballad1;
let sk3_3 = Ballad1;
let ch1_1 = tran;
let ch1_2 = tran;
let ch1_3 = tran;
let ch1_4 = tran;
let ch1_5 = tran;
let ch1_6 = tran;
let ch1_7 = tran;
let ch1_8 = tran;
let ch1_9 = tran;
let ch1_10 = tran;
let ch1_11 = tran;
let ch1_12 = tran;
let ch2_1 = tran;
let ch2_2 = tran;
let ch2_3 = tran;
let ch2_4 = tran;
let ch2_5 = tran;
let ch2_6 = tran;
let ch2_7 = tran;
let ch2_8 = tran;
let ch2_9 = tran;
let ch2_10 = tran;
let ch2_11 = tran;
let ch2_12 = tran;
let ch3_1 = tran;
let ch3_2 = tran;
let ch3_3 = tran;
let ch3_4 = tran;
let ch3_5 = tran;
let ch3_6 = tran;
let ch3_7 = tran;
let ch3_8 = tran;
let ch3_9 = tran;
let ch3_10 = tran;
let ch3_11 = tran;
let ch3_12 = tran;


function imgchange(region){
    console.log(region);
    if (region === "몬드") {
        sk1_1 = Ballad1;
        sk1_2 = Ballad2;
        sk1_3 = Ballad3;
        sk2_1 = Ballad1;
        sk2_2 = Ballad1;
        sk2_3 = Ballad1;
        sk3_1 = Ballad1;
        sk3_2 = Ballad1;
        sk3_3 = Ballad1;
        ch1_1 = tran;
        ch1_2 = tran;
        ch1_3 = tran;
        ch1_4 = tran;
        ch1_5 = tran;
        ch1_6 = tran;
        ch1_7 = tran;
        ch1_8 = tran;
        ch1_9 = tran;
        ch1_10 = tran;
        ch1_11 = tran;
        ch1_12 = tran;
        ch2_1 = tran;
        ch2_2 = tran;
        ch2_3 = tran;
        ch2_4 = tran;
        ch2_5 = tran;
        ch2_6 = tran;
        ch2_7 = tran;
        ch2_8 = tran;
        ch2_9 = tran;
        ch2_10 = tran;
        ch2_11 = tran;
        ch2_12 = tran;
        ch3_1 = tran;
        ch3_2 = tran;
        ch3_3 = tran;
        ch3_4 = tran;
        ch3_5 = tran;
        ch3_6 = tran;
        ch3_7 = tran;
        ch3_8 = tran;
        ch3_9 = tran;
        ch3_10 = tran;
        ch3_11 = tran;
        ch3_12 = tran;
    } else if(region === "리월") {
        sk1_1 = Ballad1;
        sk1_2 = Ballad2;
        sk1_3 = Ballad3;
        sk2_1 = Ballad1;
        sk2_2 = Ballad1;
        sk2_3 = Ballad1;
        sk3_1 = Ballad1;
        sk3_2 = Ballad1;
        sk3_3 = Ballad1;
        ch1_1 = tran;
        ch1_2 = tran;
        ch1_3 = tran;
        ch1_4 = tran;
        ch1_5 = tran;
        ch1_6 = tran;
        ch1_7 = tran;
        ch1_8 = tran;
        ch1_9 = tran;
        ch1_10 = tran;
        ch1_11 = tran;
        ch1_12 = tran;
        ch2_1 = tran;
        ch2_2 = tran;
        ch2_3 = tran;
        ch2_4 = tran;
        ch2_5 = tran;
        ch2_6 = tran;
        ch2_7 = tran;
        ch2_8 = tran;
        ch2_9 = tran;
        ch2_10 = tran;
        ch2_11 = tran;
        ch2_12 = tran;
        ch3_1 = tran;
        ch3_2 = tran;
        ch3_3 = tran;
        ch3_4 = tran;
        ch3_5 = tran;
        ch3_6 = tran;
        ch3_7 = tran;
        ch3_8 = tran;
        ch3_9 = tran;
        ch3_10 = tran;
        ch3_11 = tran;
        ch3_12 = tran;
    } else if(region === "이나즈마") {
        sk1_1 = Ballad1;
        sk1_2 = Ballad2;
        sk1_3 = Ballad3;
        sk2_1 = Ballad1;
        sk2_2 = Ballad1;
        sk2_3 = Ballad1;
        sk3_1 = Ballad1;
        sk3_2 = Ballad1;
        sk3_3 = Ballad1;
        ch1_1 = tran;
        ch1_2 = tran;
        ch1_3 = tran;
        ch1_4 = tran;
        ch1_5 = tran;
        ch1_6 = tran;
        ch1_7 = tran;
        ch1_8 = tran;
        ch1_9 = tran;
        ch1_10 = tran;
        ch1_11 = tran;
        ch1_12 = tran;
        ch2_1 = tran;
        ch2_2 = tran;
        ch2_3 = tran;
        ch2_4 = tran;
        ch2_5 = tran;
        ch2_6 = tran;
        ch2_7 = tran;
        ch2_8 = tran;
        ch2_9 = tran;
        ch2_10 = tran;
        ch2_11 = tran;
        ch2_12 = tran;
        ch3_1 = tran;
        ch3_2 = tran;
        ch3_3 = tran;
        ch3_4 = tran;
        ch3_5 = tran;
        ch3_6 = tran;
        ch3_7 = tran;
        ch3_8 = tran;
        ch3_9 = tran;
        ch3_10 = tran;
        ch3_11 = tran;
        ch3_12 = tran;
    } else if(region === "수메르") {
        sk1_1 = Ballad1;
        sk1_2 = Ballad2;
        sk1_3 = Ballad3;
        sk2_1 = Ballad1;
        sk2_2 = Ballad1;
        sk2_3 = Ballad1;
        sk3_1 = Ballad1;
        sk3_2 = Ballad1;
        sk3_3 = Ballad1;
        ch1_1 = tran;
        ch1_2 = tran;
        ch1_3 = tran;
        ch1_4 = tran;
        ch1_5 = tran;
        ch1_6 = tran;
        ch1_7 = tran;
        ch1_8 = tran;
        ch1_9 = tran;
        ch1_10 = tran;
        ch1_11 = tran;
        ch1_12 = tran;
        ch2_1 = tran;
        ch2_2 = tran;
        ch2_3 = tran;
        ch2_4 = tran;
        ch2_5 = tran;
        ch2_6 = tran;
        ch2_7 = tran;
        ch2_8 = tran;
        ch2_9 = tran;
        ch2_10 = tran;
        ch2_11 = tran;
        ch2_12 = tran;
        ch3_1 = tran;
        ch3_2 = tran;
        ch3_3 = tran;
        ch3_4 = tran;
        ch3_5 = tran;
        ch3_6 = tran;
        ch3_7 = tran;
        ch3_8 = tran;
        ch3_9 = tran;
        ch3_10 = tran;
        ch3_11 = tran;
        ch3_12 = tran;
    }
}

function SkillShow() {
    const [region, setRegion] = useState("몬드");
    const handleSelect = (e) => {
        console.log(region);
        setRegion(e.target.value);
        imgchange(e.target.value);
    };
    return (
        <div className="SHdiv">
            <div className="SHLeftdiv">
                <div style={{display:"flex"}}>
                    <h1 style={{ marginTop:"30px", fontSize: "40px", color: "#B1B2FF" }}>특성표</h1>
                    <select id="Region" onChange={handleSelect} className="shselect">
                        <option>몬드</option>
                        <option>리월</option>
                        <option>이나즈마</option>
                        <option>수메르</option>
                    </select>
                </div>
                <div className="SHskdiv">
                    <img src={sk1_1} className="SHimg" alt="img"></img>
                    <img src={sk1_2} className="SHimg" alt="img"></img>
                    <img src={sk1_3} className="SHimg" alt="img"></img>
                </div>
                <div className="SHskdiv">
                    <img src={sk2_1} className="SHimg" alt="img"></img>
                    <img src={sk2_2} className="SHimg" alt="img"></img>
                    <img src={sk2_3} className="SHimg" alt="img"></img>
                </div>
                <div className="SHskdiv">
                    <img src={sk3_1} className="SHimg" alt="img"></img>
                    <img src={sk3_2} className="SHimg" alt="img"></img>
                    <img src={sk3_3} className="SHimg" alt="img"></img>
                </div>
                <div></div>
            </div>
            <div className="SHRightdiv">
                <div></div>
                <div className="SHchdiv">
                    <img src={ch1_1} className="SHcimg" alt="img"></img>
                    <img src={ch1_2} className="SHcimg" alt="img"></img>
                    <img src={ch1_3} className="SHcimg" alt="img"></img>
                    <img src={ch1_4} className="SHcimg" alt="img"></img>
                    <img src={ch1_5} className="SHcimg" alt="img"></img>
                    <img src={ch1_6} className="SHcimg" alt="img"></img>
                    <img src={ch1_7} className="SHcimg" alt="img"></img>
                    <img src={ch1_8} className="SHcimg" alt="img"></img>
                    <img src={ch1_9} className="SHcimg" alt="img"></img>
                    <img src={ch1_10} className="SHcimg" alt="img"></img>
                    <img src={ch1_11} className="SHcimg" alt="img"></img>
                    <img src={ch1_12} className="SHcimg" alt="img"></img>
                </div>
                <div className="SHchdiv">
                    <img src={ch2_1} className="SHcimg" alt="img"></img>
                    <img src={ch2_2} className="SHcimg" alt="img"></img>
                    <img src={ch2_3} className="SHcimg" alt="img"></img>
                    <img src={ch2_4} className="SHcimg" alt="img"></img>
                    <img src={ch2_5} className="SHcimg" alt="img"></img>
                    <img src={ch2_6} className="SHcimg" alt="img"></img>
                    <img src={ch2_7} className="SHcimg" alt="img"></img>
                    <img src={ch2_8} className="SHcimg" alt="img"></img>
                    <img src={ch2_9} className="SHcimg" alt="img"></img>
                    <img src={ch2_10} className="SHcimg" alt="img"></img>
                    <img src={ch2_11} className="SHcimg" alt="img"></img>
                    <img src={ch2_12} className="SHcimg" alt="img"></img>
                </div>
                <div className="SHchdiv">
                    <img src={ch3_1} className="SHcimg" alt="img"></img>
                    <img src={ch3_2} className="SHcimg" alt="img"></img>
                    <img src={ch3_3} className="SHcimg" alt="img"></img>
                    <img src={ch3_4} className="SHcimg" alt="img"></img>
                    <img src={ch3_5} className="SHcimg" alt="img"></img>
                    <img src={ch3_6} className="SHcimg" alt="img"></img>
                    <img src={ch3_7} className="SHcimg" alt="img"></img>
                    <img src={ch3_8} className="SHcimg" alt="img"></img>
                    <img src={ch3_9} className="SHcimg" alt="img"></img>
                    <img src={ch3_10} className="SHcimg" alt="img"></img>
                    <img src={ch3_11} className="SHcimg" alt="img"></img>
                    <img src={ch3_12} className="SHcimg" alt="img"></img>
                </div>
                <div></div>
            </div>
        </div>
    );
}
export default SkillShow;