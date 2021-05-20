import './App.css';
import Login from "./views/Login";
import Register from "./views/Register";
import Forgotten from "./views/Forgotten";
import MyHeader from "./components/Header";
import Sidenav from "./components/Sidenav";
import HomeView from "./views/HomeView";
import React from "react";
import Filter from "./components/Filter";
import ModalBtn from "./components/ModalBtn";
import Record from "./components/Record";
import RecordView from "./views/RecordView";
import AdminHomework from "./views/AdminHomework";
import HomeworkView from "./views/HomeworkView";
import ClassesView from "./views/ClassesView";
import UsersView from "./views/UsersView";
import SettingsView from "./views/SettingsView";



function App() {
  return (
    <div className="App">
        <Sidenav />
        <SettingsView />
    </div>
  );
}

export default App;
