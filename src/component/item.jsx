import React, { Component } from "react";

class ItemRen extends Component {
  state = {};

  getIconClasses() {
    return this.props.item.done
      ? "fas fa-check-circle fa-2x"
      : "far fa-circle fa-2x";
  }

  getText() {
    return this.props.item.done ? (
      <h5 className="text-muted">
        <del>{this.props.item.name}</del>
      </h5>
    ) : (
      <h5>{this.props.item.name}</h5>
    );
  }

  render() {
    const { item, isDone, Del } = this.props;

    return (
      <React.Fragment>
        <div className="row ">
          {/* Check Icon */}
          <div className="col-1 d-flex align-items-center ">
            <i
              className={this.getIconClasses()}
              onClick={() => isDone(this.props.item)}
              style={
                item.done
                  ? { color: "green", cursor: "pointer" }
                  : { cursor: "pointer" }
              }
            ></i>
          </div>
          {/* Card Text */}
          <div className="col-8">
            <div className="row">{this.getText()}</div>
            <div className="row text-muted">{item.type}</div>
          </div>
          {/* Delete Icon */}
          <div className="col d-flex align-items-center justify-content-end text-danger">
            <i
              style={{ cursor: "pointer" }}
              onClick={() => Del(this.props.item)}
              className="far fa-trash-alt fa-2x"
            ></i>
          </div>
        </div>

        <div className="dropdown-divider"></div>
      </React.Fragment>
    );
  }
}

export default ItemRen;
