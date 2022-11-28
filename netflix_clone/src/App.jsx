import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import NetFlix from "./pages/NetFlix";
import Player from "./pages/Player";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signUp" element={<SignUp />} />
        <Route exact path="/player" element={<Player />} />
        <Route exact path="/" element={<NetFlix />} />
      </Routes>
    </Router>
  );
};

export default App;
