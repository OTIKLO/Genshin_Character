import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Main from "./routes/Main";
import Welcome from "./routes/Welcome";
import maintheme from "./music/g_main_theme.mp3";
import ReactAudioPlayer from "react-audio-player";

function App() {
  return (
  <Router>
    <ReactAudioPlayer
        src= {maintheme}
        autoPlay={true}
        >
    </ReactAudioPlayer>
    <Routes>
      <Route path="/" element={<Welcome />} />
    </Routes>
    <Routes>
      <Route path="/main" element={<Main />} />
    </Routes>
  </Router>
  
);}
export default App;
