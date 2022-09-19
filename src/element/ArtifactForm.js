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
        setAfinfo({ ...afinfo, [e.target.name]: e.target.value});
    };

    return (
        <div>
            <p> 공격력</p>
            <input type='number' name="afATK" step={0.01} onChange={handleInputChange} />
            <p> 치명타 확률</p>
            <input type='number' name="afCRC" step={0.01} onChange={handleInputChange} />
            <input type='number' name="afCRD" step={0.01} onChange={handleInputChange} />
            <input type='number' name="afEM" step={0.01} onChange={handleInputChange} />
            <input type='number' name="afEC" step={0.01} onChange={handleInputChange} />
            <input type='number' name="afHP" step={0.01} onChange={handleInputChange} />
            <input type='number' name="afDF" step={0.01} onChange={handleInputChange} />
            <input type='number' step={0.01} disabled value={result} />
            <button type='button' onClick={() => {
                setResult(afinfo.afATK + afinfo.afCRC);
            }}>계산</button>
        </div>
    );
}

export default ArtifactForm;