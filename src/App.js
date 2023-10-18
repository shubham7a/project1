import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import RegCom from "./components/RegCom";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/about" element={<RegCom />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
