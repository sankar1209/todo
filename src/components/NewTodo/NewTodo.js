import React from "react";
import axios from "axios";

class NewTodo extends React.Component {
  state = {
    item: "",
  };

  itemChange = (event) => {
    let item = event.target.value;
    this.setState({
      item: item,
    });
  };

  newTodo = () => {
    const item_obj = {
      item: this.state.item,
      id: this.props.id,
    };

    axios
      .post(`http://localhost/todo/api/newTodo.php`, { item_obj })
      .then((res) => {
        if (res.status === 200) {
          console.log("Inserted");
          this.setState({
            item: "",
          });
          this.props.cb();
        }
      });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter todo name"
          onChange={this.itemChange}
          value={this.state.item}
        />
        <input type="button" onClick={this.newTodo} value="Add" />
      </div>
    );
  }
}

export default NewTodo;
