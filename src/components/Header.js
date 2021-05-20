import React, {useState} from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {BiPowerOff} from "react-icons/all";

function MyHeader({name, statusCh, data, myData, username}){
    const [myState, setMyState] = useState(1);


    function changeStatus1() {
        myData.update({
            status: "Active"
        })
            .then(() => {
                console.log("Document successfully updated!");
                setMyState("Active");
                if(statusCh) statusCh("Active");
            })
            .catch((error) => {
                console.error("Error updating document: ", error);
            });
    }

    function changeStatus2() {
        myData.update({
            status: "Busy"
        })
            .then(() => {
                console.log("Document successfully updated!");
                setMyState("Busy");
                if(statusCh) statusCh("Busy");
            })
            .catch((error) => {
                console.error("Error updating document: ", error);
            });
    }

    function changeStatus3() {
        myData.update({
            status: "Vacation"
        })
            .then(() => {
                console.log("Document successfully updated!");
                setMyState("Vacation");
                if(statusCh) statusCh("Vacation");
            })
            .catch((error) => {
                console.error("Error updating document: ", error);
            });
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand id={"appName"} className={"font-monospace"} href="#home">{name}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav"  className={"prof"}>
                    <Nav className={"mr-auto Active " + myState}>
                        <NavDropdown title={username} id="collasible-nav-dropdown">
                            <NavDropdown.Item onClick={changeStatus1}>Status: Active</NavDropdown.Item>
                            <NavDropdown.Item onClick={changeStatus2}>Status: Busy</NavDropdown.Item>
                            <NavDropdown.Item onClick={changeStatus3}>Status: Vacation</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4" className={"text-danger"}><BiPowerOff/> Log out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default MyHeader;

