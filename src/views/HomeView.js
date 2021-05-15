import React from "react";
import MyHeader from "../components/Header";
import MainCard from "../components/MainCard";

export default function HomeView() {
    return (
        <div className={"main"}>
            <MyHeader/>
            <h3 className={"text-dark m-4 border-bottom font-monospace"}>Next seven days</h3>
            <ul className={"scrollmenu"}>
                <li className={"cards"}> <MainCard/> </li>
                <li className={"cards"}> <MainCard/> </li>
                <li className={"cards"}> <MainCard/> </li>
                <li className={"cards"}> <MainCard/> </li>
                <li className={"cards"}> <MainCard/> </li>
                <li className={"cards"}> <MainCard/> </li>
                <li className={"cards"}> <MainCard/> </li>
            </ul>
        </div>
    );
}