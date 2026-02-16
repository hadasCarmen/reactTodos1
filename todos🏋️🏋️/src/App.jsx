import { useState } from "react";

import "./App.css";
import TodoFilter from "./components/todoFilter";
import Navbar from "./components/Navbar";
function App() {
  const [totalTodos, setTotalTodos] = useState([]);
  
  return (
    <>
      <Navbar totalTodos={totalTodos} />
      <TodoFilter 
      setTotalTodos={setTotalTodos}
      totalTodos={totalTodos}
      />
    </>
  );
}

export default App;
