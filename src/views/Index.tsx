import React, { ReactElement } from "react";
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
