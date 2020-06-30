import React, { Component, ReactElement, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import "../App.scss";
import { Button } from "antd";

interface Props {}

export default function About({}: Props): ReactElement {
  const match = useRouteMatch();

  const [inc, setInc] = useState(1);

  const handleClick: Function = () => {
    setInc(inc + 1);
  };

  return (
    <div className="about">
      <div>About = {(match.params as any).id}</div>
      <div className="about-test">
        <Button onClick={() => handleClick()}>{inc}</Button>
      </div>
    </div>
  );
}
