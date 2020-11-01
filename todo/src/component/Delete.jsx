import React, { Component } from "react";
//import axios from "axios";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  // input,
  FormGroup,
  Label,
} from "reactstrap";

class Delete extends Component {
  state = {};
  render() {
    return (
      <Modal
        id="modal"
        isOpen={this.props.isModalOpen}
        toggle={this.props.toggleModal}
      >
        <ModalHeader toggle={this.toggleModal}>Delete All</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.props.DelAll()}>
            <FormGroup>
              <Label>Do you really want to delete all items ?</Label>
            </FormGroup>

            <FormGroup className="d-flex justify-content-center">
              <Button
                className="mr-2"
                type="submit"
                value="submit"
                color="danger"
              >
                Delete
              </Button>
              <Button
                type="button"
                className="btn btn-secondary"
                onClick={this.props.toggleModal}
              >
                Close
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    );
  }
}

export default Delete;
