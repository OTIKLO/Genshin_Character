import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Main from "./routes/Main";
import Welcome from "./routes/Welcome";


function App() {
  return <Router>
    <Routes>
      <Route path="/" element={<Welcome />} />
    </Routes>
    <Routes>
      <Route path="/main" element={<Main />} />
    </Routes>
  </Router>
}

export default App;
