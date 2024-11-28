import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Characters from "./pages/Characters";
import Films from "./pages/Films";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";

const App = () => (
  <Router>
    <Topbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/films" element={<Films />} />
    </Routes>
  </Router>
);

export default App;
