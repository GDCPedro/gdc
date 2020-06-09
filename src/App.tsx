import React from "react";
// import { Router, Route, Link } from "react-router";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

import "./App.scss";
import "antd/dist/antd.css";

import Hello from "./components/Hello";
import GDCFooter from "./layout/GDCFooter";
import SideMenu from "./layout/SideMenu";

// antd的中文
import zhCN from "antd/es/locale/zh_CN";
import { ConfigProvider, Layout, Button } from "antd";

const { Header, Sider, Content, Footer } = { ...Layout };

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <RecoilRoot>
        <Layout className="layout">
          <Header className="header">header</Header>
          <Layout className="sub-layout">
            <Sider className="left-sidebar">
              <SideMenu />
            </Sider>
            <Content>
              <Hello name="gdc" level={5}></Hello>
              <Button onClick={closeOn}>开关</Button>
            </Content>
          </Layout>
          <Footer className="footer">
            <GDCFooter />
          </Footer>
        </Layout>
      </RecoilRoot>
    </ConfigProvider>
  );
}

const closeOn = (): void => {
  console.log(1);
};

export default App;
