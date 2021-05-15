import React from "react";
import {Button, Form, FormGroup, Modal} from "react-bootstrap";

export default function MyModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add a record
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className={"d-grid"}>
                    <FormGroup className={"d-inline-flex m-1"}>
                        <Form.Label className={"p-2 text-black-50"}>Class:</Form.Label>
                        <Form.Control as="select" className="form-select" custom>
                            <option>Programiranje I</option>
                            <option>DWS</option>
                            <option>Android</option>
                        </Form.Control>
                    </FormGroup>
                    <FormGroup className={"d-inline-flex m-1"}>
                        <Form.Label className={"p-2 text-black-50"}>Date:</Form.Label>
                        <Form.Control type="date" placeholder="Enter date" />
                    </FormGroup>
                    <FormGroup className={"d-inline-flex m-1"}>
                        <Form.Label className={"p-2 text-black-50"}>Type:</Form.Label>
                        <Form.Control as="select" className="form-select" custom>
                            <option>Programiranje I</option>
                            <option>DWS</option>
                            <option>Android</option>
                        </Form.Control>
                    </FormGroup>
                    <FormGroup className={"d-inline-flex m-1"}>
                        <Form.Label className={"p-2 text-black-50"}>Start:</Form.Label>
                        <Form.Control type="time"/>
                    </FormGroup>
                    <FormGroup className={"d-inline-flex m-1"}>
                        <Form.Label className={"p-2 text-black-50"}>End:</Form.Label>
                        <Form.Control type="time" />
                    </FormGroup>
                    <FormGroup className={"d-inline-flex m-1"}>
                        <Form.Label className={"p-2 text-black-50"}>Participants:</Form.Label>
                        <Form.Control type="number" placeholder="Number of students" />
                    </FormGroup>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} variant={"outline-dark"}>Colse</Button>
                <Button onClick={props.onHide}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
}