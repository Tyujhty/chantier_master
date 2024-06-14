import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/Landing/LandingPage";
import SigninPage from "./pages/Signin/SigninPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/signin" element={<SigninPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
