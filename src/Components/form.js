import React, { Component } from "react";
import { Col, FormGroup, Input, Label } from "reactstrap";
import logo from "../Components/images/akatsukiLogo.png";
import konan from "./images/konan.png";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      email: "",
      password: "",
      gender: "",
      rank: "",
      bio: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  userNameHandler = (event) => {
    this.setState({
      userName: event.target.value,
    });
    console.log(this.state.userName);
  };

  emailHandler = (event) => {
    this.setState({
      email: event.target.value,

    });
    console.log(this.state.email);
  };

  passwordHandler = (event) => {
    this.setState({
      password: event.target.value,
    });
    console.log(this.state.password);
  };

  genderHandler = (event) => {
    this.setState({
      gender: event.target.value,
    });
    console.log(this.state.gender);
  };

  rankHandler = (event) => {
    this.setState({
      rank: event.target.value,
    });
    console.log(this.state.rank);
  };

  bioHandler = (event) => {
    this.setState({
      bio: event.target.value,
    });
    console.log(this.state.bio);
  };

  handleSubmit = (event) => {
    alert(
      `${this.state.userName} Registered Successfully, Welcome to the Akatsuki!`
    );
    console.log(this.state);
    this.setState({
      userName: "",
      email: "",
      password: "",
      gender: "",
      rank: "",
      bio: "",
    });
    event.preventDefault();
  };

  render() {
    return (
      <div className="content">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <img src={logo} className="logo" alt="logo" />
            <h2 className="mb-5">
              <strong>Akatsuki</strong>
            </h2>

            <FormGroup row className="mb-3 mt-3">
              {/*Username*/}
              <Label for="username" sm={2}>
                <strong>Username:</strong>
              </Label>
              <Col sm={10}>
                <Input
                  className="formInput"
                  type="text"
                  name="username"
                  id="username"
                  placeholder="username..."
                  value={this.state.userName}
                  onChange={this.userNameHandler}
                />
              </Col>
            </FormGroup>

            <FormGroup row className="mb-3 mt-3">
              {/*email*/}
              <Label for="exampleEmail" sm={2}>
                <strong>Email:</strong>
              </Label>
              <Col sm={10}>
                <Input
                  className="formInput"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email address..."
                  value={this.state.email}
                  onChange={this.emailHandler}
                />
              </Col>
            </FormGroup>

            <FormGroup row className="mb-3 mt-3">
              {/*password*/}
              <Label for="password" sm={2}>
                <strong>Password:</strong>
              </Label>
              <Col sm={10}>
                <Input
                  className="formInput"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password..."
                  value={this.state.password}
                  onChange={this.passwordHandler}
                />
              </Col>
            </FormGroup>

            {/*gender*/}
            <FormGroup row className="mb-3 mt-3">
              <Label for="gender" sm={2}>
                <strong>Gender:</strong>
              </Label>
              <Col sm={10}>
                <Input
                  onChange={this.genderHandler}
                  defaultValue="Select Gender"
                  className="formInput"
                  type="select"
                  name="gender"
                  id="gender"
                >
                  <option defaultValue>Select Gender</option>
                  <option value="Shinobi">Shinobi</option>
                  <option value="Kunoichi">Kunoichi</option>
                </Input>
              </Col>
            </FormGroup>

            <FormGroup row className="mb-3 mt-3">
              {/*rank*/}
              <Label for="rank" sm={2}>
                <strong>Rank:</strong>
              </Label>
              <Col sm={10}>
                <Input
                  onChange={this.rankHandler}
                  defaultValue="Select Rank"
                  className="formInput"
                  type="select"
                  name="rank"
                  id="rank"
                >
                  <option defaultValue>Select Rank</option>
                  <option value="Genin">Genin</option>
                  <option value="Chunin">Chunin</option>
                  <option value="Jonin">Jonin</option>
                  <option value="Sanin">Sanin</option>
                  <option value="Kage">Kage</option>
                </Input>
              </Col>
            </FormGroup>

            <FormGroup row className="mb-3 mt-3">
              {/*bio*/}
              <Label for="bio" sm={2}>
                <strong>Bio:</strong>
              </Label>
              <Col sm={10}>
                <Input
                  className="formInput"
                  type="textarea"
                  rows="3"
                  name="bio"
                  id="bio"
                  placeholder="bio..."
                  value={this.state.bio}
                  onChange={this.bioHandler}
                />
              </Col>
            </FormGroup>

            <input className="button mt-4" type="submit" value="Register" />
          </form>

          <img src={konan} className="konan" alt="logo" />
        </div>
      </div>
    );
  }
}

export default Form;
