import doff from "../img/icon/Dot_off.png";
import don from "../img/icon/Dot_on.png"

const Dot = ({ num, scrollIndex }) => {
  let dsrc = doff;
  if (scrollIndex === num) {
    dsrc = don;
  } else {
    dsrc = doff;
  }
  return (
    <div style={{
      width: 10,
      height: 10,
      transitionDuration: 1000,
      transition: "background-color 0.5s",
    }}>
      <img src={dsrc} alt="img"></img>
    </div>
  );
};

const Dots = ({ scrollIndex }) => {
  return (
    <div style={{ position: "fixed", top: "35%", right: 100 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          width: 20,
          height: 300,
        }}
      >
        <Dot num={1} scrollIndex={scrollIndex}></Dot>
        <Dot num={2} scrollIndex={scrollIndex}></Dot>
        <Dot num={3} scrollIndex={scrollIndex}></Dot>
        <Dot num={4} scrollIndex={scrollIndex}></Dot>
      </div>
    </div>
  );
};

export default Dots;