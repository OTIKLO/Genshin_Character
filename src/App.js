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
      <Route path="/Welcome" element={<Welcome />} />
      <Route path="/Main" element={<Main />} />
    </Routes>
  </Router>
  
);}
export default App;
