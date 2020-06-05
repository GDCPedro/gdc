import React from "react";
import "./App.scss";
import 'antd/dist/antd.css';

import Hello from "./components/Hello";

// antd的中文
import zhCN from "antd/es/locale/zh_CN";
import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <div className="App">
        <header className="App-header">
          <Hello name="guodongchao" level={3} />
        </header>
      </div>
    </ConfigProvider>
  );
}

export default App;
