import React, { Component } from "react";
import Partical from "../components/Partical";
import Author from "../components/login/Author";
import Form from "../components/register/Form";
import { Card } from "antd";

interface Props {}
interface State {}

export default class Register extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className="register">
        <Partical />
        <Author />

        <Card
          className="register-center"
          title="Register"
          hoverable={true}
          type="inner"
        >
          <Form parent={this} />
        </Card>
      </div>
    );
  }
}
