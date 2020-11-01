import React, { Component } from "react";
import axios from "axios";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  input,
  FormGroup,
  Label,
} from "reactstrap";

class AddNew extends Component {
  constructor() {
    super();

    this.state = {
      newItem: "",
      newCat: "",
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    //ADD
    //Call Backend
    const obj = {
      done: false,
      name: this.state.newItem,
      type: this.state.newCat,
    };
    if (obj.name !== "" && obj.type !== "") {
      await axios.post("http://localhost:3000/list/", obj);
      this.props.toggleModal();
      window.location.reload(false);
    }
  };

  handleAdd = (e) => {
    //Clone
    let state = { ...this.state };
    //Edit
    state[e.currentTarget.name] = e.currentTarget.value;
    //Set state
    this.setState(state);
  };

  render() {
    return (
      <Modal
        id="modal"
        isOpen={this.props.isModalOpen}
        toggle={this.props.toggleModal}
      >
        <ModalHeader toggle={this.toggleModal}>Add New Item ToDo</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label>ToDo Name</Label>
              <input
                name="newItem"
                className="form-control"
                onChange={this.handleAdd}
                type="text"
                placeholder=""
                value={this.state.newItem}
              />
            </FormGroup>
            <FormGroup>
              <Label>ToDo Category</Label>
              <input
                name="newCat"
                className="form-control"
                onChange={this.handleAdd}
                type="text"
                placeholder=""
                value={this.state.newCat}
              />
            </FormGroup>
            <FormGroup className="d-flex justify-content-center">
              <Button
                className="mr-2"
                type="submit"
                value="submit"
                color="danger"
              >
                Add
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

export default AddNew;
