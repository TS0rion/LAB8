import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./form/Login";
import SignUp from "./form/SignUp";
function App() {
  return (
    <>
      <div className="bg-blue-200 h-screen">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
