import React, { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";
import {
  AppleOutlined,
  WechatOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { sideBarState } from "../store/index";
import { useRecoilValue } from "recoil";
interface IMenuItem {
  key: string;
  title: string;
  icon: object;
  to: string;
}

interface Props {}
interface State {
  items: Array<IMenuItem>;
}

export default function SideMenu({}: Props): ReactElement {
  // 菜单展开/收起的状态
  const sideBar: boolean = useRecoilValue(sideBarState);
  console.log("--", sideBar);
  // 菜单列表
  const state: State = {
    items: [
      {
        key: "1",
        title: "Index",
        icon: <AppleOutlined />,
        to: "/index",
      },
      {
        key: "2",
        title: "About",
        icon: <WechatOutlined />,
        to: "/about",
      },
      {
        key: "3",
        title: "App",
        icon: <YoutubeOutlined />,
        to: "/",
      },
    ],
  };

  return (
    <Menu>
      {state.items.map((item) => (
        <Menu.Item key={item.key} title={item.title} icon={item.icon}>
          <NavLink to={item.to}>{item.title}</NavLink>
        </Menu.Item>
      ))}
      <Menu.Item key="999" title="路由参数">
        <NavLink to="/about/1314">路由参数</NavLink>
      </Menu.Item>
    </Menu>
  );
}
