import React from "react";
import "./TodoFilter.css";
import Todo from "./Todo";
function TodoFilter(props) {
    const {totalTodos,setTotalTodos}=props
    let currentTitle
    let currentPriority='Low'
    function setTitle(e) {
        currentTitle=e.target.value
    }
    function setPriority(e) {
        currentPriority=e.target.value
    }
    function setTotal() {
        setTotalTodos((prev)=>[...prev,{currentTitle,currentPriority}])
    }
  return (
    <div>
      <form onSubmit={e=>e.preventDefault()} action="" className="formTodos">
        <h3> Add a New Todo</h3>
        <label htmlFor="todoSomething">Title </label>
        <input onChange={setTitle} type="text" name="todoSomething" id="todoSomething" />
        <label htmlFor="priority">Priority </label>
        <select onChange={setPriority} name="priority" id="priority">
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="Very important">Very important</option>
        </select>
        <section className="buttonsTodos">
          <button onClick={setTotal}>Save Todo</button>
          <button >Clear</button>
        </section>
      </form>
      <div className="all-todos">
            {totalTodos.map((todo,idx)=>{
                return <Todo
                key ={idx}
                todo={todo}
                />
            })}
      </div>
    </div>
  );
}

export default TodoFilter;
