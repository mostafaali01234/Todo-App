import React, { Component } from "react";
import NavBar from "./navbar";
import SideBar from "./sidebar";
import { Route, Switch, Redirect } from "react-router-dom";
//import axios from "axios";
//import { toast } from "react-toastify";

import Home from "./home";

import "../css/sidebar.css";

class App extends Component {
  constructor() {
    super();
    this.toggleModal = this.toggleModal.bind(this);
    this.ShowDoneItems = this.ShowDoneItems.bind(this);
    this.ShowUnDoneItems = this.ShowUnDoneItems.bind(this);
    this.ShowAll = this.ShowAll.bind(this);
    this.ShowCat = this.ShowCat.bind(this);

    this.state = {
      list: [
        { done: false, name: "Buy Bannana", type: "Groceries", id: 1 },
        { done: false, name: "Buy vegetables", type: "Groceries", id: 2 },
        { done: false, name: "Buy books", type: "Bookshop", id: 3 },
        {
          done: false,
          name: "Check tech prices",
          type: "Internet surfing",
          id: 4,
        },
      ],
      isModalOpen: false,
      ShowDone: false,
      ShowUnDone: false,
      SelectedCat: "",
    };
  }

  // async componentDidMount() {
  //   //Call Backend
  //   let { data } = await axios.get("http://localhost:3000/list");
  //   console.log(data);
  //   //Set State
  //   this.setState({ list: data });
  // }

  // state = {
  //   list: [
  //     { done: true, name: "Buy Bannana", type: "Groceries", id: 1 },
  //     { done: true, name: "Buy vegetables", type: "Groceries", id: 2 },
  //     { done: true, name: "Buy books", type: "Bookshop", id: 3 },
  //     { done: true, name: "Check tech prices", type: "Internet surfing", id: 4 },
  //     { done: true, name: "Calling mom", type: "PhoneCall", id: 5 },
  //   ],
  //   isModalOpen: false,
  //   ShowDone: false,
  //   ShowUnDone: false,
  //   SelectedCat: "",
  // };
  handleAdd = (item) => {
    //Clone
    let list = [...this.state.list];
    //Edit
    list.push(item);
    console.log(list);
    //Set state
    this.setState({ list });
    this.toggleModal();
  };

  handleInDone = async (item) => {
    //Clone
    const list = [...this.state.list];
    const index = list.indexOf(item);
    list[index] = { ...list[index] };
    //Edit
    list[index].done = !list[index].done;
    //Set State
    this.setState({ list });
    /////////////////////////////////////////////////////
    //console.log(list[index].id);
    //Delete ID
    //delete list[index].id;

    // await axios.put(
    //   "http://localhost:3000/list/" + list[index].id,
    //   list[index]
    // );
  };

  handleDelete = async (item) => {
    //Clone
    //const oldList = [...this.state.list];
    const list = this.state.list.filter((i) => i.id !== item.id);
    this.setState({ list });
    // try {
    //   //Call B
    //   await axios.delete("http://localhost:3000/list/" + item.id);
    // } catch (ex) {
    //   toast("Cant Delete");
    //   this.setState({ list: oldList });
    // }
  };

  DeleteAll = async () => {
    //const oldList = [...this.state.list];
    //let i;

    // -------------- Delete Done items
    if (this.state.ShowDone) {
      const list = this.state.list.filter((item) => item.done === false);
      //console.log(oldList[0]);
      this.setState({ list });
      // for (i = 1; i < oldList.length + 1; i++) {
      //   try {
      //     if (oldList[i - 1].done) {
      //       await axios.delete("http://localhost:3000/list/" + i);
      //     } else {
      //       continue;
      //     }
      //   } catch (ex) {
      //     toast("Cant Delete");
      //     this.setState({ list: oldList });
      //   }
      // }
      // window.location.reload(false);
    }
    // -------------- Delete UnDone items
    else if (this.state.ShowUnDone) {
      const list = this.state.list.filter((item) => item.done === true);
      //console.log(oldList[0]);
      this.setState({ list });
      // for (i = 1; i < oldList.length + 1; i++) {
      //   try {
      //     if (oldList[i - 1].done === false) {
      //       await axios.delete("http://localhost:3000/list/" + i);
      //     } else {
      //       continue;
      //     }
      //   } catch (ex) {
      //     toast("Cant Delete");
      //     this.setState({ list: oldList });
      //   }
      // }
      // window.location.reload(false);
    }
    // -------------- Delete Category items
    else if (this.state.SelectedCat !== "") {
      const list = this.state.list.filter(
        (item) => item.type !== this.state.SelectedCat
      );
      //console.log(oldList[0]);
      this.setState({ list });
      // for (i = 1; i < oldList.length + 1; i++) {
      //   try {
      //     if (oldList[i - 1].type === this.state.SelectedCat) {
      //       await axios.delete("http://localhost:3000/list/" + i);
      //     } else {
      //       continue;
      //     }
      //   } catch (ex) {
      //     toast("Cant Delete");
      //     this.setState({ list: oldList });
      //   }
      // }
      // window.location.reload(false);
    }
    // -------------- Delete All items
    else {
      const list = [];
      this.setState({ list });
      // for (i = 0; i < oldList.length + 1; i++) {
      //   try {
      //     await axios.delete("http://localhost:3000/list/" + i);
      //   } catch (ex) {
      //     toast("Cant Delete");
      //     this.setState({ list: oldList });
      //   }
      // }
      // window.location.reload(false);
    }
  };

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  ShowDoneItems() {
    this.setState({
      ShowDone: true,
      ShowUnDone: false,
      SelectedCat: "",
    });
  }

  ShowUnDoneItems() {
    this.setState({
      ShowUnDone: true,
      ShowDone: false,
      SelectedCat: "",
    });
  }

  ShowAll() {
    this.setState({
      ShowUnDone: false,
      ShowDone: false,
      SelectedCat: "",
    });
  }

  ShowCat(c) {
    //console.log("sended " + c);
    //console.log(this.state.SelectedCat);
    this.setState({
      ShowUnDone: false,
      ShowDone: false,
      SelectedCat: c,
    });
  }

  render() {
    //let lastId = this.state.list[this.state.list.length - 1].id + 1;
    return (
      <React.Fragment>
        <NavBar />

        <div className="main">
          <div className="row">
            {
              <div className="col-2 ">
                <SideBar
                  list={this.state.list}
                  ShowDoneItems={this.ShowDoneItems}
                  ShowUnDoneItems={this.ShowUnDoneItems}
                  ShowAll={this.ShowAll}
                  ShowCat={this.ShowCat}
                />
              </div>
            }
            <div className="col ">
              <Switch>
                <Route
                  path="/Todo-App/"
                  render={() => (
                    <Home
                      list={this.state.list}
                      isDone={this.handleInDone}
                      Del={this.handleDelete}
                      DelAll={this.DeleteAll}
                      isModalOpen={this.state.isModalOpen}
                      toggleModal={this.toggleModal}
                      ShowDone={this.state.ShowDone}
                      ShowUnDone={this.state.ShowUnDone}
                      SelectedCat={this.state.SelectedCat}
                      Add={this.handleAdd}
                      lastItemId={this.props.lastItemId}
                    />
                  )}
                />
                <Redirect from="/" to="/Todo-App/" />
              </Switch>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
