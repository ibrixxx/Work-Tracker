import React from "react";
import MyHeader from "../components/Header";
import Filter from "../components/Filter";
import ModalBtn from "../components/ModalBtn";
import Record from "../components/Record";

export default function RecordView() {
    return (
        <div className={"main"}>
            <MyHeader/>
            <Filter/>
            <ModalBtn text={"Add new record"} admin={true}/>
            <div className={"myRecords"}>
                <Record/>
                <Record/>
                <Record/>
                <Record/>
                <Record/>
                <Record/>
                <Record/>
                <Record/>
                <Record/>
            </div>
        </div>
    );
}