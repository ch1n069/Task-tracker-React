import "./App.css";
import React, { useState } from "react";

// components import

import Form from "./components/form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");

  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Task tracker</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
