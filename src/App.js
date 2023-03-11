import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
   <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/Profile" element={<Profile />}/>
     </Routes>
     </BrowserRouter>
   </>
  
  );
}

export default App;
