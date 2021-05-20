import React, {useEffect, useState} from "react";
import firebase from "firebase";
import MyHeader from "../components/Header";
import Profile from "../components/Profile";


export default function SettingsView() {
    var db = firebase.firestore();
    const[status, setStatus] = useState("Active");
    const[username, setUsername] = useState("");
    const[arr, setArr] = useState({})
    useEffect(() => {readUsers()}, []);

    var myData = db.collection("users").doc("mTEOTNWSv7oyAnN7suFk");

    function readUsers() {
        db.collection("users").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
                let arr = querySnapshot.docs.map(doc => doc.data());
                let ar = querySnapshot.docs.map(doc => doc.id);
                for(let i=0; i<ar.length; i++)
                    arr[i].id = ar[i];
                setUsername(arr[0].username);
                setStatus(arr[0].status);
                setArr(arr[0]);
            });
        });
    }


    function changeState(str) {
        setStatus(str)
    }

    function changeUsername(str){
        setUsername(str)
    }

    return(
        <div className={"main"}>
            <MyHeader name={"Settings"} statusCh={changeState} data={arr} myData={myData} username={username}/>
            <Profile status={status} data={arr} myData={myData} setUsername={changeUsername}/>
        </div>
    );
}