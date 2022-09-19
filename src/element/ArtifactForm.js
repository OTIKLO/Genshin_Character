import { useState } from "react";

function ArtifactForm() {
    /*const [afATK, setafATK] = useState(0);
    const [afCRC, setafCRC] = useState(0);
    const [afCRD, setafCRD] = useState(0);
    const [afEM, setafEM] = useState(0);
    const [afEC, setafEC] = useState(0);
    const [afHP, setafHP] = useState(0);
    const [afDF, setafDF] = useState(0);
    const [result, setResult] = useState(0);

    function ATKchange(e) {
        setafATK(parseFloat(e.target.value));
        setResult(afATK + afCRC);
    };*/
    const [afinfo, setAfinfo] = useState({
        afATK: 0,
        afCRC: 0,
        afCRD: 0,
        afEM: 0,
        afEC: 0,
        afHP: 0,
        afDF: 0
    });
    const [result, setResult] = useState(0);
    const handleInputChange = (e) => {
        setAfinfo({ ...afinfo, [e.target.name]: parseFloat(e.target.value) });
        setResult(afinfo.afATK * 2 + afinfo.afCRC * 3 + afinfo.afCRD * 1.5 + afinfo.afDF * 1.6 + afinfo.afEC * 1.8 + afinfo.afEM * 0.5 + afinfo.afHP * 2);
    };
    const handleReset = () => {
        setAfinfo({
            afATK: 0,
            afCRC: 0,
            afCRD: 0,
            afEM: 0,
            afEC: 0,
            afHP: 0,
            afDF: 0
        });
        setResult(afinfo.afATK * 2 + afinfo.afCRC * 3 + afinfo.afCRD * 1.5 + afinfo.afDF * 1.6 + afinfo.afEC * 1.8 + afinfo.afEM * 0.5 + afinfo.afHP * 2);
    };

    return (
        <div className="divstyle">
            <h1 style={{ fontSize: "40px", color: "violet" }}>성유물 점수 계산기</h1>
            <div style={{ display: "grid", gridTemplateColumns: "1 1", justifyContent: "center" }}>
                <p className="artifactP"> 공격력% ATK</p>
                <input type='number' className="artifactI" name="afATK" step={0.01} onChange={handleInputChange} onKeyPress={handleInputChange} value={afinfo.afATK}/>
                <p className="artifactP"> 치명타 확률% CRC</p>
                <input type='number' className="artifactI" name="afCRC" step={0.01} onChange={handleInputChange} onKeyPress={handleInputChange} value={afinfo.afCRC}/>
                <p className="artifactP"> 치명타 피해% CRD</p>
                <input type='number' className="artifactI" name="afCRD" step={0.01} onChange={handleInputChange} onKeyPress={handleInputChange} value={afinfo.afCRD}/>
                <p className="artifactP" style={{color:"#CC99ff"}}> 원소충전효율% EC</p>
                <input type='number' style={{backgroundColor:"#CC99ff"}} className="artifactI" name="afEC" step={0.01} onChange={handleInputChange} onKeyPress={handleInputChange} value={afinfo.afEC}/>
                <p className="artifactP"style={{color:"#00ffcc"}}> 원소마스터리 EM</p>
                <input type='number' style={{backgroundColor:"#00ffcc"}} className="artifactI" name="afEM" step={0.01} onChange={handleInputChange} onKeyPress={handleInputChange} value={afinfo.afEM}/>
                <p className="artifactP" style={{color:"#FF6666"}}> 체력% HP</p>
                <input type='number' style={{backgroundColor:"#FF6666"}} className="artifactI" name="afHP" step={0.01} onChange={handleInputChange} onKeyPress={handleInputChange} value={afinfo.afHP}/>
                <p className="artifactP" style={{color:"#FFCC66"}}> 방어력%</p>
                <input type='number' style={{backgroundColor:"#FFCC66"}} className="artifactI" name="afDF" step={0.01} onChange={handleInputChange} onKeyPress={handleInputChange} value={afinfo.afDF}/>
            </div>
            <input type='number' className="artifactI" style={{ marginTop: "30px" }} step={0.01} disabled value={result} />
            <div><button type='button' className="resetbtn" onClick={handleReset}>초기화</button></div>
        </div>
    );
}

export default ArtifactForm;