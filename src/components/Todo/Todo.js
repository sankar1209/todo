import React from "react";
import "./style.css";
import axios from "axios";

class Todo extends React.Component {
  state = {
    sts: this.props.status === 1 ? true : false,
    tid: this.props.id,
  };

  openModal = () => {
    this.props.openModal(this.props.id);
  };

  stsChange = (event) => {
    this.setState({
      sts: !this.state.sts,
    });

    const item_obj = {
      id: event.target.id,
      sts: !this.state.sts,
    };
    axios
      .post(`http://localhost/todo/api/updateTodo.php`, { item_obj })
      .then((res) => {
        if (res.status === 200) {
          console.log("updated");
        }
      });
  };

  deleteItem = () => {
    const item_obj = {
      id: this.props.id,
    };
    axios
      .post(`http://localhost/todo/api/deleteTodo.php`, { item_obj })
      .then((res) => {
        if (res.status === 200) {
          console.log("Deleted");
          this.props.cb();
        }
      });
  };

  render() {
    return (
      <div className="todo" key={this.props.index}>
        <h3 className={this.state.sts === true ? "completed" : ""}>
          <input
            type="checkbox"
            defaultChecked={this.state.sts}
            id={this.props.id}
            onChange={this.stsChange}
          />
          {this.props.title}
          <i className="fa fa-edit" onClick={this.openModal}></i>
          <i className="fa fa-trash" onClick={this.deleteItem}></i>
        </h3>
      </div>
    );
  }
}

export default Todo;
