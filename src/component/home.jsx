import React, { Component } from "react";
import ItemRen from "./item";
import AddNew from "./AddNew";

//import "../css/card.css";
//import Delete from "./Delete";

class Home extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div className="card todo-item">
          {/* ----------------------Add New || Delete All----------------------------- */}
          <div className="card-header ">
            <div className="row">
              <div
                className="col-9 d-flex align-items-center text-primary"
                onClick={() => this.props.toggleModal()}
                style={{ cursor: "pointer" }}
              >
                <i className="fas fa-plus fa-2x mr-3"></i>
                <h5>Add New-to-do</h5>

                <AddNew
                  isModalOpen={this.props.isModalOpen}
                  toggleModal={this.props.toggleModal}
                />
              </div>
              {/* Delete All */}
              <div
                className="col d-flex align-items-center justify-content-end text-danger"
                onClick={() => this.props.DelAll()}
                //onClick={() => this.props.toggleModal()}
                style={{ cursor: "pointer" }}
              >
                <h5>Delete All</h5>
                <i className="far fa-trash-alt fa-2x ml-3"></i>
                {/* <Delete
                  isModalOpen={this.props.isModalOpen}
                  toggleModal={this.props.toggleModal}
                  DelAll={this.props.DelAll}
                /> */}
              </div>
            </div>
          </div>

          {/* ----------------------Render list----------------------------- */}
          <div className="card-body">
            {this.props.list.map((item) => {
              /* Categories */
              if (this.props.SelectedCat !== "") {
                if (item.type === this.props.SelectedCat) {
                  return (
                    <div key={item.id}>
                      <ItemRen
                        item={item}
                        isDone={this.props.isDone}
                        Del={this.props.Del}
                        DelAll={this.props.DelAll}
                      />
                    </div>
                  );
                }
              } else if (this.props.ShowUnDone) {
                /* UnDone */
                if (!item.done) {
                  return (
                    <div key={item.id}>
                      <ItemRen
                        item={item}
                        isDone={this.props.isDone}
                        Del={this.props.Del}
                        DelAll={this.props.DelAll}
                      />
                    </div>
                  );
                }
              } else if (this.props.ShowDone) {
                /* Show Done */
                if (item.done) {
                  return (
                    <div key={item.id}>
                      <ItemRen
                        item={item}
                        isDone={this.props.isDone}
                        Del={this.props.Del}
                        DelAll={this.props.DelAll}
                      />
                    </div>
                  );
                }
              } else {
                /* Show All */
                return (
                  <div key={item.id}>
                    <ItemRen
                      item={item}
                      isDone={this.props.isDone}
                      Del={this.props.Del}
                      DelAll={this.props.DelAll}
                    />
                  </div>
                );
              }
            })}
          </div>
          {/* Add New */}
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
