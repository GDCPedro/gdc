import React, { Component, ReactElement } from "react";
import { useRouteMatch } from "react-router-dom";

interface Props {}

export default function About({}: Props): ReactElement {
  const match = useRouteMatch();

  return (
    <div className="about">
      <div>About => {(match.params as any).id}</div>
    </div>
  );
}
