import React from "react";
import "./style.css";
import axios from "axios";
import Todo from "../Todo/Todo";
import NewTodo from "../NewTodo/NewTodo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EditTodo from "../NewTodo/EditTodo";

class Home extends React.Component {
  state = {
    show: false,
    tid: "",
    items: [],
  };

  componentDidMount = () => {
    this.getTodoList();
  };

  openModalPop = (tid) => {
    this.setState({
      show: true,
      tid: tid,
    });
  };

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  getTodoList = () => {
    axios
      .get(`http://localhost/todo/api/getList.php?id=` + this.props.id)
      .then((res) => {
        const items = res.data.items;
        this.setState({ items: items });
      });
  };

  printTodos = () => {
    return this.state.items.map((todo, index) => {
      return (
        <div key={index}>
          <Todo
            title={todo.item}
            id={todo.id}
            status={todo.status}
            openModal={this.openModalPop}
            cb={this.getTodoList}
          />
        </div>
      );
    });
  };

  newTodo = () => {};

  render() {
    return (
      <Router>
        <div className="home">
          <Switch>
            <Route path="/">
              Welcome {this.props.name}
              {this.state.items.length === 0 ? (
                <div>
                  <p>You don't have items</p>
                  <NewTodo id={this.props.id} cb={this.getTodoList} />
                </div>
              ) : (
                <div>
                  {this.printTodos()}
                  <NewTodo id={this.props.id} cb={this.getTodoList} />
                </div>
              )}
            </Route>

            <Route path="/new"></Route>
          </Switch>
        </div>
        {this.state.show === true ? (
          <EditTodo
            show={this.state.show}
            handleClose={this.handleClose}
            tid={this.state.tid}
            cb={this.getTodoList}
          />
        ) : (
          ""
        )}
      </Router>
    );
  }
}

export default Home;
