import React, { Component } from "react";
import "react-sidebar-ui/dist/index.css";
import { Nav, NavDropdown, DropdownButton } from "react-bootstrap";

import "../css/sidebar.css";

class SideBar extends Component {
  state = { cat: [] };

  newCat(c) {
    //Clone
    let cat = { ...this.state.cat };
    //Edit
    cat = cat + c;
    //Set state
    this.setState({ cat });
  }

  render() {
    let x = [];
    const dropTitle = (
      <span>
        <i className="fas fa-list fa-lg"> Categories</i>
      </span>
    );

    return (
      <Nav
        className="col-md-2 d-none d-md-block bg-dark sidebar"
        activeKey="/home"
        style="z-index: 1;"
      >
        <div className="sidebar-sticky"></div>
        <Nav.Item>
          <Nav.Link
            className="nLink"
            href="/Todo-App/"
            onClick={this.props.ShowAll}
          >
            <i className="fas fa-home mr-2" />
            Home
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            className="nLink"
            href="#"
            onClick={this.props.ShowUnDoneItems}
          >
            <i className="fas fa-clipboard-list fa-lg mr-2" />
            UnDone Items
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            className="nLink"
            href="#"
            onClick={this.props.ShowDoneItems}
          >
            <i className="fas fa-clipboard-check fa-lg mr-2" />
            Done Items
          </Nav.Link>
        </Nav.Item>

        {/* <Nav.Item>
          <Nav.Link className="nLink disabled" href="#">
            <i className="fas fa-list fa-lg mr-2" />
            Categories
          </Nav.Link>
          <ul>
            {this.props.list.map((item) => {
              let c = 0;
              //console.log(x);
              for (let i = 0; i < x.length; i++) {
                if (x[i] == item.type) {
                  c++;
                  break;
                }
              }
              if (c == 0) {
                x.push(item.type);
                return (
                  <Nav.Link className="nLink" key={item.id}>
                    <li>{item.type}</li>
                  </Nav.Link>
                );
              } else {
                //.log("found" + item.type);
              }
            })}
          </ul>
        </Nav.Item> */}

        <br />

        <Nav.Item className="ml-2">
          <DropdownButton title={dropTitle} id="collasible-nav-dropdown">
            {this.props.list.map((item) => {
              let c = 0;
              //console.log(x);
              for (let i = 0; i < x.length; i++) {
                if (x[i] === item.type) {
                  c++;
                  break;
                }
              }
              if (c === 0) {
                x.push(item.type);
                return (
                  <NavDropdown.Item
                    key={item.id}
                    onClick={() => this.props.ShowCat(item.type)}
                  >
                    {" "}
                    {item.type}{" "}
                  </NavDropdown.Item>
                );
              } else {
                //console.log("found" + item.type);

                return;
              }
            })}
          </DropdownButton>
        </Nav.Item>
      </Nav>
    );
  }
}

export default SideBar;

// const SideBar = () => {
//   return (

//     // <div className="container">
//     //   <br />
//     //   <div className="row">
//     //     <div className="col-1">
//     //       <i className="fas fa-portrait fa-lg"></i>
//     //     </div>
//     //     <div className="col ">Mostafa Ali</div>
//     //   </div>

//     //   <br />
//     //   <div className="row">
//     //     <div className="col-1">
//     //       <i className="far fa-sun fa-lg"></i>
//     //     </div>
//     //     <div className="col ">MY Day</div>
//     //   </div>

//     //   <br />
//     //   <div className="row">
//     //     <div className="col-1">
//     //       <i className="fas fa-clipboard-list fa-lg"></i>
//     //     </div>
//     //     <div className="col ">UnDone Items</div>
//     //   </div>

//     //   <br />
//     //   <div className="row">
//     //     <div className="col-1">
//     //       <i className="fas fa-clipboard-check fa-lg"></i>
//     //     </div>
//     //     <div className="col ">Done Items</div>
//     //   </div>
//     // </div>
//   );
// };

// export default SideBar;
