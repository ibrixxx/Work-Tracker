import React from 'react';
import {Nav} from "react-bootstrap";
import logo from "../logo.svg";
import {
    AiFillHome,
    BiTask,
    FaRegListAlt,
    FiUsers,
    GiNetworkBars,
    IoSettingsOutline
} from "react-icons/all";

function Sidenav({admin}){

    if(admin)
        return (
            <div className={"sidenav"}>
                <img src={logo} className="App-logo" alt="logo" id={"mylogo"} />
                <Nav defaultActiveKey="/home" className="flex-column myNav">
                    <Nav.Link href="/home" className={"text-info"}><h6 id={"link-1"}><AiFillHome/> Home</h6></Nav.Link>
                    <Nav.Link eventKey="link-1" className={"text-info"}><h6 id={"link-1"}><BiTask/> Held lectures</h6></Nav.Link>
                    <Nav.Link eventKey="link-2" className={"text-info"}><h6 id={"link-1"}><GiNetworkBars/> Homework</h6></Nav.Link>
                    <Nav.Link eventKey="link-3" className={"text-info"}><h6 id={"link-1"}><FaRegListAlt/> Classes</h6></Nav.Link>
                    <Nav.Link eventKey="link-4" className={"text-info"}><h6 id={"link-1"}><FiUsers/> Users</h6></Nav.Link>
                    <Nav.Link eventKey="link-5" className={"text-info"}><h6 id={"link-1"}><IoSettingsOutline/> Settings</h6></Nav.Link>
                </Nav>
            </div>
        );

    return (
        <div className={"sidenav"}>
            <img src={logo} className="App-logo" alt="logo" id={"mylogo"} />
            <Nav defaultActiveKey="/home" className="flex-column myNav">
                <Nav.Link href="/home" className={"text-info"}><h6 id={"link-1"}><AiFillHome/> Home</h6></Nav.Link>
                <Nav.Link eventKey="link-1" className={"text-info"}><h6 id={"link-1"}><BiTask/> Held lectures</h6></Nav.Link>
                <Nav.Link eventKey="link-2" className={"text-info"}><h6 id={"link-1"}><GiNetworkBars/> Homework</h6></Nav.Link>
                <Nav.Link eventKey="link-3" className={"text-info"}><h6 id={"link-1"}><FaRegListAlt/> Classes</h6></Nav.Link>
                <Nav.Link eventKey="link-5" className={"text-info"}><h6 id={"link-1"}><IoSettingsOutline/> Settings</h6></Nav.Link>
                <Nav.Link eventKey="disabled" disabled>
                    <FiUsers/> Users
                </Nav.Link>
            </Nav>
        </div>
    );

}

export default Sidenav;

