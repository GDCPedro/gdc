import React from "react";
import "./App.scss";

import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello name="guodongchao" level={3} />
      </header>
    </div>
  );
}

export default App;
