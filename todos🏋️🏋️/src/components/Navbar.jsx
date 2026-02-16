import React from "react";
import'./Navbar.css'
function Navbar(props) {
  const { totalTodos } = props;
  return (
    <>
      <div className="nav-bar">
        <h2>Todo App</h2>
        <section className="rightNav">
          <span>Total Todos: {totalTodos.length}</span>
          <button>Posts</button>
          <button>Dark Mode</button>
        </section>
      </div>
    </>
  );
}

export default Navbar;
