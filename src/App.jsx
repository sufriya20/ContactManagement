import React from "react";
import "./App.css"
import "./bootstrap.min.css"
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import { Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";


function App() {

  return (
    <>
    <Header/>
    
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/dash" element={<Dashboard/>}/>
      
  
    </Routes>
    <ToastContainer/>
    
    </>
  )
}

export default App;
