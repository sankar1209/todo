import React from "react";
import "./style.css";
import Home from "../Home/Home";
import axios from "axios";

class Welcome extends React.Component {
  state = {
    email: "",
    name: "",
    uid: 0,
  };

  emailChange = (event) => {
    let email = event.target.value;

    this.setState({
      email: email,
    });
  };

  proceed = () => {
    var name = this.state.email.substring(0, this.state.email.lastIndexOf("@"));

    const user = {
      name: name,
      email: this.state.email,
    };

    axios
      .post(`http://localhost/todo/api/register.php`, { user })
      .then((res) => {
        if (res.status === 200) {
          let id = res.data.id;
          let name = res.data.name;

          this.setState({
            uid: id,
            name: name,
          });
        }
      });
  };

  emailForm = () => {
    return (
      <form>
        <label>Please enter email address:</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email address"
          onChange={this.emailChange}
        />
        <br />
        <button type="button" title="Proceed" onClick={this.proceed}>
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </button>
      </form>
    );
  };

  render() {
    return (
      <div className="welcome">
        {this.state.uid ? (
          <Home name={this.state.name} id={this.state.uid} />
        ) : (
          this.emailForm()
        )}
      </div>
    );
  }
}

export default Welcome;
