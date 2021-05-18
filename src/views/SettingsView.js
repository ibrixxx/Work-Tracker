import React, {useState} from "react";
import MyHeader from "../components/Header";
import Profile from "../components/Profile";


export default function SettingsView() {
    const[status, setStatus] = useState("active");

    function changeState(str) {
        setStatus(str)
    }

    return(
        <div className={"main"}>
            <MyHeader name={"Settings"} status={changeState}/>
            <Profile status={status}/>
        </div>
    );
}