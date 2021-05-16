import React, {useState} from "react";
import MyHeader from "../components/Header";
import {Button} from "react-bootstrap";
import AddTask from "../components/AddTask";
import MyHomework from "../components/MyHomework";



export default function HomeworkView() {
    const [add, setAdd] = useState(true);

    return (
        <div className={"main"}>
            <MyHeader/>
            <h3 className={"text-info mt-3 fw-bold"}>My tasks</h3>
            <MyHomework/>
            <div className={"m-3"}>
                <Button variant={"outline-success"} className={"mx-3"} onClick={()=>{setAdd(!add)}}>Request new homework</Button>
            </div>
            <AddTask hide={add} user={true}/>
        </div>
    );
}