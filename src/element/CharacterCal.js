import art from "./cc/babara/babara_art.png"

function CharacterCal() {
    return (
        <div className="CCdiv">
            <div className="CCLeftdiv">
                <div style={{ background: "black" }}>
                </div>
                <div style={{ background: "red" }}>
                    <img src={art} className="CCimg" alt="img"></img>
                </div>
            </div>
            <div className="CCRightdiv">
                <p>d</p>
            </div>
        </div>
    );
}
export default CharacterCal;