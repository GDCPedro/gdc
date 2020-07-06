import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./store/index";
import Index from "./views/Index";
import About from "./views/About";
import Login from "./views/Login";
import Register from "./views/Register";

import { RecoilRoot } from "recoil";

import "./App.scss";
import "./assets/variables.scss";
import "./index.scss";
import "antd/dist/antd.css";

import GDCFooter from "./layout/GDCFooter";
import SideMenu from "./layout/SideMenu";

// antd的中文
import zhCN from "antd/es/locale/zh_CN";
import { ConfigProvider, Layout } from "antd";

const { Header, Sider, Content, Footer } = { ...Layout };

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <Switch>
        <RecoilRoot>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/gdc">
            <Layout className="layout">
              <Header className="header">header</Header>
              <Layout className="sub-layout">
                <Sider className="left-sidebar">
                  <SideMenu />
                </Sider>
                <Content>
                  <Route path="/index">
                    <Index />
                  </Route>
                  <Route path="/about/:id?">
                    <About />
                  </Route>
                </Content>
              </Layout>
              <Footer className="footer">
                <GDCFooter />
              </Footer>
            </Layout>
          </Route>
        </RecoilRoot>
      </Switch>
    </ConfigProvider>
  );
}

export default App;
