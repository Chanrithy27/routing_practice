import React from 'react';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Params from "./components/Params";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route element = {<Home/>} path = "/home"/>
        <Route element = {<Params/>} path = "/:word"/>
        <Route element = {<Params/>} path = "/:word/:color/:bgcolor"/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
