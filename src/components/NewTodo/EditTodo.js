import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

class EditTodo extends React.Component {
  state = {
    show: this.props.show,
    tid: this.props.tid,
    title: "",
  };

  componentDidMount() {
    axios
      .get(`http://localhost/todo/api/getListItem.php?id=` + this.props.tid)
      .then((res) => {
        const item = res.data.item[0];
        this.setState({ title: item.item });
      });
  }

  handleClose = () => {
    this.props.handleClose();
  };

  handleSubmit = () => {
    const item_obj = {
      item: this.state.title,
      id: this.props.tid,
    };

    axios
      .post(`http://localhost/todo/api/updateTodoTitle.php`, { item_obj })
      .then((res) => {
        if (res.status === 200) {
          console.log("Updated");
          this.props.cb();
        }
      });
  };

  itemChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  render() {
    return (
      <div ref={this.wrapper}>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Todo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <textarea
              value={this.state.title}
              onChange={this.itemChange}
            ></textarea>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default EditTodo;
