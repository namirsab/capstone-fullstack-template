import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState("");

  useEffect(() => {
    fetch("/api/hello-world")
      .then((res) => res.json())
      .then((data) => setState(data));
  });

  return (
    <div className="App">
      <h1> {state} </h1>
    </div>
  );
}

export default App;
