import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

import "./index.css";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";0
import Profile from "./pages/Profile/Profile"
import Register from "./pages/Login-Register/Register";
import Login from "./pages/Login-Register/Login";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/profile" element = {<Profile/>}/>
          <Route path="/register" element = {<Register/>}/>
          <Route path="/login" element = {<Login/>}/>
          
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
