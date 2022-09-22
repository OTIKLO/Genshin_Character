import art from "./cc/babara/babara_art.png"
import mora from "./icon/mora.png"
import { useState } from "react";

function CharacterCal() {
    const needmora = 0;
    const needexp = 0;
    const [level, setLevel] = useState({
        startlevel: 1,
        endlevel: 1,
    });
    const handleInputChange1 = (e) => {
        if (e.target.value >= 1 && e.target.value <= 90) {
            if(e.target.value < level.endlevel){
                setLevel({ ...level, [e.target.name]: parseInt(e.target.value) });
            }
        }
    };
    const handleInputChange2 = (e) => {
        if (e.target.value >= 1 && e.target.value <= 90) {
            if(e.target.value < level.startlevel){
                e.target.value = level.startlevel;
            }
                setLevel({ ...level, [e.target.name]: parseFloat(e.target.value) });
        }
    };
    /*switch(level.startlevel){

    }*/

    return (
        <div className="CCdiv">
            <div className="CCLeftdiv">
                <img src={art} className="CCimg" alt="img"></img>
            </div>
            <div className="CCRightdiv">
                <div className="CCLevels">
                    <select id="Char" onchange="SetCharL()">
                        <optgroup label="바람">
                            <option>벤티</option>
                            <option>진</option>
                            <option>소</option>
                            <option>바람행자</option>
                            <option>설탕</option>
                            <option>카에데하라 카즈하</option>
                            <option>사유</option>
                        </optgroup>
                        <optgroup label="물">
                            <option>타르탈리아</option>
                            <option>모나</option>
                            <option>행추</option>
                            <option>바바라</option>
                            <option>산고노미야 코코미</option>
                            <option>카미사토 아야토</option>
                            <option>야란</option>
                        </optgroup>
                        <optgroup label="불">
                            <option>다이루크</option>
                            <option>클레</option>
                            <option>호두</option>
                            <option>베넷</option>
                            <option>향릉</option>
                            <option>엠버</option>
                            <option>신염</option>
                            <option>연비</option>
                            <option>요이미야</option>
                            <option>토마</option>
                        </optgroup>
                        <optgroup label="얼음">
                            <option>치치</option>
                            <option>감우</option>
                            <option>유라</option>
                            <option>중운</option>
                            <option>디오나</option>
                            <option>케이아</option>
                            <option>로자리아</option>
                            <option>카미사토 아야카</option>
                            <option>에일로이</option>
                            <option>신학</option>
                        </optgroup>
                        <optgroup label="번개">
                            <option>각청</option>
                            <option>피슬</option>
                            <option>번행자</option>
                            <option>북두</option>
                            <option>레이저</option>
                            <option>리사</option>
                            <option>라이덴 쇼군</option>
                            <option>쿠죠 사라</option>
                            <option>야에 미코</option>
                            <option>쿠키 시노부</option>
                        </optgroup>
                        <optgroup label="바위">
                            <option>종려</option>
                            <option>알베도</option>
                            <option>바위행자</option>
                            <option>응광</option>
                            <option>노엘</option>
                            <option>아라타키 이토</option>
                            <option>고로</option>
                            <option>운근</option>
                        </optgroup>
                    </select>
                    <p className="cccP">레벨: </p>
                    <input type='number' className="cclevel" name="startlevel" onChange={handleInputChange1} onKeyPress={handleInputChange1} value={level.startlevel} />
                    <p className="cccP"> - </p>
                    <input type='number' className="cclevel" name="endlevel" onChange={handleInputChange2} onKeyPress={handleInputChange2} value={level.endlevel} />
                </div>
                <div className="CCLevelup">
                    <div>
                        <img src={mora} className="cccimg" alt="불러오기 오류"></img>
                        <p className="levelupP">{needmora}</p>
                    </div>
                    <div>
                        <img src={mora} className="cccimg" alt="불러오기 오류"></img>
                        <p className="levelupP">{needexp}</p>
                    </div>
                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>
    );
}
export default CharacterCal;