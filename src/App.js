import "./App.css";

import { CardList } from "./components/card-list/card-list.component";
import React from "react";
import { SearchBar } from "./components/search-bar/search-bar.component";

// import SearchContext from "./context/SearchContext";

function App() {
  return (
    <div className="App">
      <div>
        <SearchBar></SearchBar>
      </div>

      <div>
        <CardList />
      </div>
    </div>
  );
}

export default App;
