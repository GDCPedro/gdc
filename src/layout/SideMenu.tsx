import React, { ReactElement } from "react";
import { NavLink, useRouteMatch, useLocation } from "react-router-dom";
import { Menu } from "antd";
import {
  AppleOutlined,
  WechatOutlined,
  YoutubeOutlined,
  StopOutlined,
} from "@ant-design/icons";
import {
  sideBarState,
  defaultItemState,
  filteredDefaultItem,
} from "../store/index";
import { useRecoilValue, useRecoilState } from "recoil";
interface IMenuItem {
  key: string;
  title: string;
  icon: object;
  to: string;
  computedTo?: string;
  params?: object;
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
      // {
      //   key: "3",
      //   title: "App",
      //   icon: <YoutubeOutlined />,
      //   to: "/",
      // },
      {
        key: "999",
        title: "传递路由参数",
        icon: <StopOutlined />,
        to: "/about",
        params: {
          id: 1314,
        },
        computedTo: "/about/1314",
      },
    ],
  };

  const location = useLocation();

  const [defaultItem, setDefaultItem] = useRecoilState(defaultItemState);
  const defaultItemArr = useRecoilValue(filteredDefaultItem);

  /**
   * 刷新页面时，获取当前应渲染的Item
   */
  const handleItemClick: Function = (key: string): void => {
    sessionStorage.setItem("defaultItem", key);
    setDefaultItem(key);
  };

  return (
    <Menu defaultSelectedKeys={defaultItemArr as string[]}>
      {state.items.map((item) => (
        <Menu.Item
          key={item.key}
          title={item.title}
          icon={item.icon}
          onClick={({ item, key, keyPath, domEvent }) => handleItemClick(key)}
        >
          <NavLink to={!!item.computedTo ? item.computedTo : item.to}>
            {item.title}
          </NavLink>
        </Menu.Item>
      ))}
    </Menu>
  );
}
