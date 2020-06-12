import React, { Component, ReactElement } from "react";

interface Props {}

function Inner({}: Props): ReactElement {
  return (
    <div className="about">
      <div>About</div>
    </div>
  );
}

export default class About extends Component {
  componentDidMount() {
    console.log(this);
  }

  render() {
    return <Inner />;
  }
}
