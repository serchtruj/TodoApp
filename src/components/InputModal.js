import { Button, Modal, Form} from 'react-bootstrap';

export default function InputModal(props) {
    return(
        <>
            <Modal
                show={props.showModal}
                dialogClassName="modal-90w"
            >
                <Modal.Header>
                    <Modal.Title>
                        <h2>My Task</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Control 
                                type="text" value={props.inputUser} 
                                placeholder={props.currentEdit === "" ? "Enter new task" : props.currentEdit}
                                onChange={(e => props.handleChange(e.target.value))}       
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={props.confirmTask}>Confirm</Button>
                    <Button variant="danger" onClick={props.declineTask}>Decline</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}