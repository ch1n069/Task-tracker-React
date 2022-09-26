import logo from "./logo.svg";
import "./App.css";

// components import

import Form from "./components/form";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Task tracker</h1>
      </header>
      <Form />
    </div>
  );
}

export default App;
