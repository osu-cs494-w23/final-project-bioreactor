import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Selection from "./pages/Selection";
import Recipes from "./pages/Recipes";
import Setting from "./pages/Setting";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route index element={<Main />} />
          <Route path="/main" element={<Navigate to="/" />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/about" element={<About />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/load" element={<Selection />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
