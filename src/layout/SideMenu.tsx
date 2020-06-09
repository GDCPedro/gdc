import React, { Component, ReactElement, JSXElementConstructor } from "react";
import { Menu } from "antd";
import {
  AppleOutlined,
  WechatOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

interface IMenuItem {
  key: string;
  title: string;
  icon: JSX.Element;
}

interface Props {}
interface State {
  items: Array<IMenuItem>;
}

export default class SideMenu extends Component<Props, State> {
  state: State = {
    items: [
      {
        key: "1",
        title: "菜单一",
        icon: <AppleOutlined />,
      },
      {
        key: "2",
        title: "菜单二",
        icon: <WechatOutlined />,
      },
      {
        key: "3",
        title: "菜单三",
        icon: <YoutubeOutlined />,
      },
    ],
  };

  handleClickMenu(target: any) {
    console.log(target);
  }

  render() {
    return (
      <div>
        <Menu onClick={this.handleClickMenu}>
          {this.state.items.map((item) => (
            <Menu.Item key={item.key} title={item.title} icon={item.icon}>
              {item.title}
            </Menu.Item>
          ))}
        </Menu>
      </div>
    );
  }
}
