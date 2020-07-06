import React, { Component } from "react";
import { Card } from "antd";
import InnerForm from "../components/login/InnerForm";
import Author from "../components/login/Author";
import Partical from "../components/Partical";

interface Props {}
interface State {}

export default class Login extends Component<Props, State> {
  render() {
    return (
      <div className="login">
        <Partical />
        <Author />

        <Card
          className="login-center"
          title="User Login"
          hoverable={true}
          type="inner"
        >
          <InnerForm parent={this} />
        </Card>
      </div>
    );
  }
}
