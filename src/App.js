import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import './stylesheet/app.scss'
import Pages from "./components/Pages";
function App() {
  return (
    <div className="w-full items-center flex flex-col bg-gray-200  p-4 px-8">
    <Navbar/>
    <Routes>
      <Route path="/page/:id" element={<Pages/>} />
      <Route path="/" element={<Home/>} />
    </Routes>
   <Footer/>
    </div>
  );
}

export default App;
