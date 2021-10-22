import React, { useState } from "react"
import './App.css';
import ButtonsGrid from "./Components/ButtonsGrid";


function App() {

  const [state, setState] = useState({
    operation:
    
    calculation:
  })

  return (
    <div className="App">
      <header className="App-header">
      <div className="frame">
        <ButtonsGrid handleClick={handleClick}/>
      </div>
      </header>
    </div>
  );
}

export default App;
