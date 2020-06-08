import React from "react";
import service from "../api/index";
import { Button, message } from "antd";

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
      <Button type="primary" className="greeting" onClick={handleGetHello}>
        Hello, {name + getLevel(level)}
      </Button>
    </div>
  );
}

const getLevel: Function = (level: number) => Array(level + 1).join("!");

const handleGetHello = (): void => {
  // service.getHello("郭东超").then((res) => {
  //   if (res.errcode === 0) {
  //     message.success(res.message);
  //   }
  // });
  // ###
  // 试试注册
  service
    .handleRegister({ name: "guodongchao", pswd: "199411" })
    .then((res) => {
      if (res.errcode === 0) {
        message.success(res.message);
      }
    });
};
