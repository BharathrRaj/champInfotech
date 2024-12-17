import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Carieer from './pages/Carieer';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Home/>} />
      <Route path = "/career" element = {<Carieer/>} />
      <Route path = "/" element = {<Home/>} />
      <Route path = "/" element = {<Home/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
