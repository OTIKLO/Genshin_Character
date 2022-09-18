import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Startloading from "./routes/Startloading";
import Main from "./routes/Main";
import Welcome from "./routes/Welcome";
    

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Startloading />} />
    </Routes>
    <Routes>
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
    <Routes>
      <Route path="/main" element={<Main />} />
    </Routes>
  </Router>
  
);}
export default App;
