import React from "react";
import {Button} from "react-bootstrap";
import MyModal from "./MyModal";

export default function ModalBtn() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className={"mb-3"}>
            <Button variant="info" className={"text-light"} onClick={() => setModalShow(true)}>
                Add new record
            </Button>

            <MyModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
}