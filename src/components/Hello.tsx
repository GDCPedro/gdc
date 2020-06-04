import React from "react";

interface Props {
  name: string;
  level?: number;
}
interface State {}

export default function Hello({ name, level = 1 }: Props): JSX.Element {
  if (level <= 0) {
    throw new Error("You could be a little more enthusiastic. :D");
  }

  return (
    <div className="hello">
      <div className="greeting">Hello, {name + getLevel(level)}</div>
    </div>
  );
}

const getLevel: Function = (level: number) => Array(level + 1).join("!");
