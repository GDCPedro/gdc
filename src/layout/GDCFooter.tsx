import React, { Component } from "react";
import "../App.scss";

interface Props {}
interface State {}

export default class GDCFooter extends Component<Props, State> {
  state = {};

  render() {
    return <div className="gdc-footer">&copy;1994-2020&nbsp;郭东超</div>;
  }
}
