import { useState } from "react";
import Fr1 from "./Skill/skillbook/Freedom1.png";        //몬드
import Fr2 from "./Skill/skillbook/Freedom2.png";
import Fr3 from "./Skill/skillbook/Freedom3.png";
import Re1 from "./Skill/skillbook/Resistance1.png";
import Re2 from "./Skill/skillbook/Resistance2.png";
import Re3 from "./Skill/skillbook/Resistance3.png";
import Ba1 from "./Skill/skillbook/Ballad1.png";
import Ba2 from "./Skill/skillbook/Ballad2.png";
import Ba3 from "./Skill/skillbook/Ballad3.png";
import Pr1 from "./Skill/skillbook/Prosperity1.png";        //리월
import Pr2 from "./Skill/skillbook/Prosperity2.png";
import Pr3 from "./Skill/skillbook/Prosperity3.png";
import Di1 from "./Skill/skillbook/Diligence1.png";
import Di2 from "./Skill/skillbook/Diligence2.png";
import Di3 from "./Skill/skillbook/Diligence3.png";
import Go1 from "./Skill/skillbook/Gold1.png";
import Go2 from "./Skill/skillbook/Gold2.png";
import Go3 from "./Skill/skillbook/Gold3.png";
import Tr1 from "./Skill/skillbook/Transience1.png";      //이나즈마
import Tr2 from "./Skill/skillbook/Transience2.png";
import Tr3 from "./Skill/skillbook/Transience3.png";
import El1 from "./Skill/skillbook/Elegance1.png";
import El2 from "./Skill/skillbook/Elegance2.png";
import El3 from "./Skill/skillbook/Elegance3.png";
import Li1 from "./Skill/skillbook/Light1.png";
import Li2 from "./Skill/skillbook/Light2.png";
import Li3 from "./Skill/skillbook/Light3.png";
import Ad1 from "./Skill/skillbook/Advice1.png";         //수메르
import Ad2 from "./Skill/skillbook/Advice2.png";
import Ad3 from "./Skill/skillbook/Advice3.png";
import Cr1 from "./Skill/skillbook/creative1.png";
import Cr2 from "./Skill/skillbook/creative2.png";
import Cr3 from "./Skill/skillbook/creative3.png";
import Im1 from "./Skill/skillbook/Implement1.png";
import Im2 from "./Skill/skillbook/Implement2.png";
import Im3 from "./Skill/skillbook/Implement3.png";
import tran from "./icon/skillbook/tran.png";

import amber from "./Skill/icon/Amber_icon.png";        //자유
import klee from "./Skill/icon/Klee_icon.png";
import tartaglia from "./Skill/icon/Tartaglia_icon.png";
import babara from "./Skill/icon/Barbara_icon.png";
import diona from "./Skill/icon/Diona_icon.png";
import sucrose from "./Skill/icon/Sucrose_icon.png";
import jean from "./Skill/icon/Jean_icon.png";        //투쟁
import diluc from "./Skill/icon/Diluc_icon.png";
import mona from "./Skill/icon/Mona_icon.png";
import eula from "./Skill/icon/Eula_icon.png";
import noelle from "./Skill/icon/Noelle_icon.png";
import razor from "./Skill/icon/Razor_icon.png";
import bennett from "./Skill/icon/Bennett_icon.png";
import venti from "./Skill/icon/Venti_icon.png";      //시문
import albedo from "./Skill/icon/Albedo_icon.png";
import fischl from "./Skill/icon/Fischl_icon.png";
import lisa from "./Skill/icon/Lisa_icon.png";
import kaeya from "./Skill/icon/Kaeya_icon.png";
import rosaria from "./Skill/icon/Rosaria_icon.png";
import keqing from "./Skill/icon/Keqing_icon.png";      //번영
import xiao from "./Skill/icon/Xiao_icon.png";
import qiqi from "./Skill/icon/Qiqi_icon.png";
import shenhe from "./Skill/icon/Shenhe_icon.png";
import ningguang from "./Skill/icon/Ningguang_icon.png";
import yelan from "./Skill/icon/Yelan_icon.png";
import hutao from "./Skill/icon/HuTao_icon.png";      //근면
import ganyu from "./Skill/icon/Ganyu_icon.png";
import kazuha from "./Skill/icon/Kazuha_icon.png";
import chongyun from "./Skill/icon/Chongyun_icon.png";
import xiangling from "./Skill/icon/Xiangling_icon.png";
import yunjin from "./Skill/icon/YunJin_icon.png";
import zhongli from "./Skill/icon/Zhongli_icon.png";    //황금
import yanfei from "./Skill/icon/Yanfei_icon.png";
import xinyan from "./Skill/icon/Xinyan_icon.png";
import beidou from "./Skill/icon/Beidou_icon.png";
import xingqiu from "./Skill/icon/Xingqiu_icon.png";
import kokomi from "./Skill/icon/Kokomi_icon.png";          //부세
import yoimiya from "./Skill/icon/Yoimiya_icon.png";
import thoma from "./Skill/icon/Thoma_icon.png";
import ayaka from "./Skill/icon/Ayaka_icon.png";          //풍아
import ayato from "./Skill/icon/Ayato_icon.png";
import itto from "./Skill/icon/Itto_icon.png";
import sara from "./Skill/icon/Sara_icon.png";
import raiden from "./Skill/icon/Raiden_icon.png";          //천광
import miko from "./Skill/icon/Miko_icon.png";
import sayu from "./Skill/icon/Sayu_icon.png";
import gorou from "./Skill/icon/Gorou_icon.png";
import tignari from "./Skill/icon/Tignari_icon.png";          //간언
import syno from "./Skill/icon/Syno_icon.png";
import candace from "./Skill/icon/Candace_icon.png";
import dori from "./Skill/icon/Dori_icon.png";              //창의
import collei from "./Skill/icon/Collei_icon.png";          //실천

let sk1_1 = Fr1;
let sk1_2 = Fr2;
let sk1_3 = Fr3;
let sk2_1 = Re1;
let sk2_2 = Re2;
let sk2_3 = Re3;
let sk3_1 = Ba1;
let sk3_2 = Ba2;
let sk3_3 = Ba3;
let ch1_1 = amber;
let ch1_2 = klee;
let ch1_3 = tartaglia;
let ch1_4 = babara;
let ch1_5 = diona;
let ch1_6 = sucrose;
let ch1_7 = tran;
let ch1_8 = tran;
let ch1_9 = tran;
let ch1_10 = tran;
let ch1_11 = tran;
let ch1_12 = tran;
let ch2_1 = jean;
let ch2_2 = diluc;
let ch2_3 = mona;
let ch2_4 = eula;
let ch2_5 = noelle;
let ch2_6 = razor;
let ch2_7 = bennett;
let ch2_8 = tran;
let ch2_9 = tran;
let ch2_10 = tran;
let ch2_11 = tran;
let ch2_12 = tran;
let ch3_1 = venti;
let ch3_2 = albedo;
let ch3_3 = fischl;
let ch3_4 = lisa;
let ch3_5 = kaeya;
let ch3_6 = rosaria;
let ch3_7 = tran;
let ch3_8 = tran;
let ch3_9 = tran;
let ch3_10 = tran;
let ch3_11 = tran;
let ch3_12 = tran;


function imgchange(region){
    console.log(region);
    if (region === "몬드") {
        sk1_1 = Fr1;
        sk1_2 = Fr2;
        sk1_3 = Fr3;
        sk2_1 = Re1;
        sk2_2 = Re2;
        sk2_3 = Re3;
        sk3_1 = Ba1;
        sk3_2 = Ba2;
        sk3_3 = Ba3;
        ch1_1 = amber;
        ch1_2 = klee;
        ch1_3 = tartaglia;
        ch1_4 = babara;
        ch1_5 = diona;
        ch1_6 = sucrose;
        ch1_7 = tran;
        ch1_8 = tran;
        ch1_9 = tran;
        ch1_10 = tran;
        ch1_11 = tran;
        ch1_12 = tran;
        ch2_1 = jean;
        ch2_2 = diluc;
        ch2_3 = mona;
        ch2_4 = eula;
        ch2_5 = noelle;
        ch2_6 = razor;
        ch2_7 = bennett;
        ch2_8 = tran;
        ch2_9 = tran;
        ch2_10 = tran;
        ch2_11 = tran;
        ch2_12 = tran;
        ch3_1 = venti;
        ch3_2 = albedo;
        ch3_3 = fischl;
        ch3_4 = lisa;
        ch3_5 = kaeya;
        ch3_6 = rosaria;
        ch3_7 = tran;
        ch3_8 = tran;
        ch3_9 = tran;
        ch3_10 = tran;
        ch3_11 = tran;
        ch3_12 = tran;
    } else if(region === "리월") {
        sk1_1 = Pr1;
        sk1_2 = Pr2;
        sk1_3 = Pr3;
        sk2_1 = Di1;
        sk2_2 = Di2;
        sk2_3 = Di3;
        sk3_1 = Go1;
        sk3_2 = Go2;
        sk3_3 = Go3;
        ch1_1 = keqing;
        ch1_2 = xiao;
        ch1_3 = qiqi;
        ch1_4 = shenhe;
        ch1_5 = ningguang;
        ch1_6 = yelan;
        ch1_7 = tran;
        ch1_8 = tran;
        ch1_9 = tran;
        ch1_10 = tran;
        ch1_11 = tran;
        ch1_12 = tran;
        ch2_1 = hutao;
        ch2_2 = ganyu;
        ch2_3 = kazuha;
        ch2_4 = chongyun;
        ch2_5 = xiangling;
        ch2_6 = yunjin;
        ch2_7 = tran;
        ch2_8 = tran;
        ch2_9 = tran;
        ch2_10 = tran;
        ch2_11 = tran;
        ch2_12 = tran;
        ch3_1 = zhongli;
        ch3_2 = yanfei;
        ch3_3 = xinyan;
        ch3_4 = beidou;
        ch3_5 = xingqiu;
        ch3_6 = tran;
        ch3_7 = tran;
        ch3_8 = tran;
        ch3_9 = tran;
        ch3_10 = tran;
        ch3_11 = tran;
        ch3_12 = tran;
    } else if(region === "이나즈마") {
        sk1_1 = Tr1;
        sk1_2 = Tr2;
        sk1_3 = Tr3;
        sk2_1 = El1;
        sk2_2 = El2;
        sk2_3 = El3;
        sk3_1 = Li1;
        sk3_2 = Li2;
        sk3_3 = Li3;
        ch1_1 = kokomi;
        ch1_2 = yoimiya;
        ch1_3 = thoma;
        ch1_4 = tran;
        ch1_5 = tran;
        ch1_6 = tran;
        ch1_7 = tran;
        ch1_8 = tran;
        ch1_9 = tran;
        ch1_10 = tran;
        ch1_11 = tran;
        ch1_12 = tran;
        ch2_1 = ayaka;
        ch2_2 = ayato;
        ch2_3 = itto;
        ch2_4 = sara;
        ch2_5 = tran;
        ch2_6 = tran;
        ch2_7 = tran;
        ch2_8 = tran;
        ch2_9 = tran;
        ch2_10 = tran;
        ch2_11 = tran;
        ch2_12 = tran;
        ch3_1 = raiden;
        ch3_2 = miko;
        ch3_3 = sayu;
        ch3_4 = gorou;
        ch3_5 = tran;
        ch3_6 = tran;
        ch3_7 = tran;
        ch3_8 = tran;
        ch3_9 = tran;
        ch3_10 = tran;
        ch3_11 = tran;
        ch3_12 = tran;
    } else if(region === "수메르") {
        sk1_1 = Ad1;
        sk1_2 = Ad2;
        sk1_3 = Ad3;
        sk2_1 = Cr1;
        sk2_2 = Cr2;
        sk2_3 = Cr3;
        sk3_1 = Im1;
        sk3_2 = Im2;
        sk3_3 = Im3;
        ch1_1 = tignari;
        ch1_2 = syno;
        ch1_3 = candace;
        ch1_4 = tran;
        ch1_5 = tran;
        ch1_6 = tran;
        ch1_7 = tran;
        ch1_8 = tran;
        ch1_9 = tran;
        ch1_10 = tran;
        ch1_11 = tran;
        ch1_12 = tran;
        ch2_1 = dori;
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
        ch3_1 = collei;
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