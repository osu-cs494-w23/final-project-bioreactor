import { Navigate, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Selection from "./pages/Selection";
import Manage from "./pages/Manage";
import Setting from "./pages/Setting";
import Navbar from "./components/Navbar";
import "./App.css";
import { useContext } from "react";
import SocketContext from "./socketio/socketContext";
import { useDispatch } from "react-redux";
import { useInterval } from "./socketio/useInterval";
import Manual from "./pages/Manual";

function App() {
  const socket = useContext(SocketContext);
  const dispatch = useDispatch();
  useInterval(socket, 500, dispatch);
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route index element={<Main />} />
          <Route path="/main" element={<Navigate to="/" />} />
          <Route path="/recipes" element={<Manage />} />
          <Route path="/recipes/:id" element={<Manage />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/load" element={<Selection />} />
          <Route path="/manual/load" element={<Selection />}></Route>
          <Route path="/manual" element={<Manual />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
