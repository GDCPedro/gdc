import React from "react";
// import { Router, Route, Link } from "react-router";

import "./App.scss";
import "antd/dist/antd.css";

import Hello from "./components/Hello";

// antd的中文
import zhCN from "antd/es/locale/zh_CN";
import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <div className="App">
        <header className="App-header"></header>
      </div>
    </ConfigProvider>
  );
}

export default App;
