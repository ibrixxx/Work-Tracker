import './App.css';
import Login from "./components/Login";
import Register from "./components/Register";
import Forgotten from "./components/Forgotten";
import MyHeader from "./components/Header";
import Sidenav from "./components/Sidenav";
import HomeView from "./views/HomeView";
import React from "react";
import Filter from "./components/Filter";
import ModalBtn from "./components/ModalBtn";
import Record from "./components/Record";
import RecordView from "./views/RecordView";



function App() {
  return (
    <div className="App">
          <Sidenav />
          <RecordView/>
    </div>
  );
}

export default App;
