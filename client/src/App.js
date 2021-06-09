import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("");

  /* This is just an example to show that we can access
  the endpoint wihout writing the whole path, and that 
  the proxy feature of the create-react-app proxies the request
  to our server application */
  useEffect(() => {
    fetch("/api/hello-world") // localhost:3000/api/hello-world -> localhost:4000/api/hello-world
      .then((res) => res.json())
      .then((data) => setText(data));
  });

  return (
    <div className="App">
      <h1> {text} </h1>
    </div>
  );
}

export default App;
