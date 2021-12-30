import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";

function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8000/api/user", {
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      const content = await response.json();
      //console.log(content);

      setName(content.name);
    })();
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Nav name={name} setName={setName}/>
        <main className="form-signin">
          <Routes>
            <Route path="/" element={() => {<Home name={name}/>}} />
            <Route path="/login" element= {() => <Login setName={setName}/>} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
