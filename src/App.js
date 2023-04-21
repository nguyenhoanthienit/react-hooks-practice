import { useState } from "react";
import "./App.scss";
import ColorBox from "./component/ColorBox";
import TodoList from "./component/TodoList";
import TodoForm from "./component/TodoForm";

function App() {
  const [todos, setToDos] = useState([
    { id: 1, title: "test1" },
    { id: 2, title: "test2" },
    { id: 3, title: "test3" },
  ]);

  function handleOnTodosListClick(todo) {
    console.log(todo)
    let idx = todos.findIndex(s => s.id === todo.id);
    let newTodos = [...todos];
    newTodos.splice(idx, 1);
    setToDos(newTodos);
  }

  function handleJobClick() {
    let newTodos = [...todos, {id: todos.length + 1, title: "test" + (todos.length + 1)}];
    setToDos(newTodos)
  }

  function handleTodoFormSubmit(formValues){
    console.log(formValues);

    let newTodo = {
      id: todos.length + 1,
      ...formValues
    }
    let newTodos = [...todos, newTodo];
    setToDos(newTodos);
  }

  return (
    <div className="app">
      <ColorBox />

      <button onClick={handleJobClick}>Add</button>
      <TodoForm onSubmit={handleTodoFormSubmit}/>
      <TodoList todos={todos} onTodoClick={handleOnTodosListClick}/>
    </div>
  );
}

export default App;
