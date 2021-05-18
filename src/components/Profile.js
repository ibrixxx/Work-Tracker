import React, {useState} from "react";
import {Button, DropdownButton, Form} from "react-bootstrap";


export default function Profile({status}) {
    const[edit, setEdit] = useState(false);
    const[psw, setPsw] = useState(true);

    return(
        <div className="card">
            <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle"
                         width="150"/>
                    <div className="mt-3">
                        <h4 contentEditable={edit} className={edit? "border-bottom text-info":""}>John Doe</h4>
                        <p contentEditable={edit} className={"text-secondary mb-1 " + (edit? "border-bottom text-info":"")}>Username</p>
                        <p className="font-size-sm text-primary">Type</p>
                        <p className={"text-secondary font-size-sm"}>Status: {status}</p>
                        <Button className={"m-3"} variant="primary" onClick={() => {setEdit(!edit)}}>Edit</Button>
                        <Button className={"m-3"} variant={"outline-primary"} onClick={() => {setPsw(!psw)}}>Change Password</Button>
                        <div hidden={psw} className={"bg-light"}>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>New Password</Form.Label>
                                    <Form.Control type="password" placeholder="new password" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label className={"mt-2"}>Confirm Password</Form.Label>
                                    <Form.Control type="password" placeholder="retype new password" />
                                </Form.Group>
                                <Button variant="success" className={"mt-2"} type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                        <DropdownButton className={"m-3"} id="dropdown-basic-button" variant={"outline-dark"} title="Change Style">
                            <a className="dropdown-item" >Light</a>
                            <a className="dropdown-item" >Dark</a>
                        </DropdownButton>
                    </div>
                </div>
            </div>
        </div>
    );
}