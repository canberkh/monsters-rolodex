import "./App.css";

import React, { useEffect, useState } from "react";

import { CardList } from "./components/card-list/card-list.component";

function App() {
  return (
    <div className="App">
      <div>
        <CardList />
      </div>
      <div></div>
    </div>
  );
}

export default App;
