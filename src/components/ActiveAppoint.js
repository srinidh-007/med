import React from "react";
import { Button, Card, Modal } from 'react-bootstrap';
const ActiveAppoint = () => {
    return (
        <div>
            <Modal.Dialog>
  <Modal.Header >
    <Modal.Title>Appointments details</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Ravi </p>
    <p>Cardiologist</p>
    <p>10.30 am</p>
    <p>fees paid</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="danger">Cancel</Button>
    <Button variant="primary">View</Button>
  </Modal.Footer>
</Modal.Dialog>

<Modal.Dialog>
  <Modal.Header >
    <Modal.Title>Appointments details</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Ramu </p>
    <p>Cardiologist</p>
    <p>11.30 am</p>
    <p>fees paid</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="danger">Cancel</Button>
    <Button variant="primary">View</Button>
  </Modal.Footer>
</Modal.Dialog>

<Modal.Dialog>
  <Modal.Header >
    <Modal.Title>Appointments details</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Ramu </p>
    <p>Cardiologist</p>
    <p>11.30 am</p>
    <p>fees paid</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="danger">Cancel</Button>
    <Button variant="primary">View</Button>
  </Modal.Footer>
</Modal.Dialog>
        </div>
    )
}
    

export default ActiveAppoint