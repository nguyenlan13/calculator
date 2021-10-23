import React, { useState } from "react"
import './App.css';
import ButtonsGrid from "./Components/ButtonsGrid";



function App() {

  return (
    <div className="App">
      <header className="App-header">
      <div className="frame">
        <ButtonsGrid/>
      </div>
      </header>
    </div>
  );
}

export default App;
