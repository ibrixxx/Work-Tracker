import React, {useState} from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {BiPowerOff} from "react-icons/all";

function MyHeader({name, status}){
    const [myState, setMyState] = useState("activea");


    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand id={"appName"} className={"font-monospace"} href="#home">{name}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav"  className={"prof"}>
                    <Nav className={"mr-auto " + myState}>
                        <NavDropdown title="Username" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1" onClick={()=>{setMyState("activea"); if(status) status("active")}}>Status: Active</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" onClick={()=>{setMyState("sick"); if(status) status("busy")}}>Status: Busy</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" onClick={()=>{setMyState("rest"); if(status) status("vacation")}}>Status: Vacation</NavDropdown.Item>
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

