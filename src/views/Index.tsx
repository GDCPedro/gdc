import React, { ReactElement } from "react";
import Hello from "../components/Hello";
import { Button } from "antd";
import "../App.scss";
import { useRecoilState } from "recoil";
import { sideBarState } from "../store/index";

interface Props {}

export default function Index({}: Props): ReactElement {
  const [sideBar, setSideBar] = useRecoilState(sideBarState);
  console.log(sideBar);

  return (
    <div className="index">
      <Hello name="gdc" level={5}></Hello>
      <Button
        onClick={() => {
          setSideBar(!sideBar);
        }}
      >
        开关
      </Button>
    </div>
  );
}
