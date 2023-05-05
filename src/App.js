import { useEffect, useState } from "react";
import "./App.scss";
import ColorBox from "./component/ColorBox";
import TodoList from "./component/TodoList";
import TodoForm from "./component/TodoForm";
import PostList from "./component/PostList";
import Pagination from "./component/Pagination";
import queryString from "query-string";
import PostFiltersForm from "./component/PostFiltersForm";
import Clock from "./component/Clock";
import BeautifulClock from "./component/BeautifulClock";
import MagicBox from "./component/MagicBox";

function App() {
  const [todos, setToDos] = useState([
    { id: 1, title: "test1" },
    { id: 2, title: "test2" },
    { id: 3, title: "test3" },
  ]);

  const [postList, setPostList] = useState([]);

  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRow: 1,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramString = queryString.stringify(filters);
        const requestUrl =
          `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const response = await fetch(requestUrl);
        const reponseJson = await response.json();
        console.log(reponseJson);

        const { data, pagination } = reponseJson;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log(error.message);
      }
    }
    console.log("from API");
    fetchPostList();
  }, [filters]);

  useEffect(() => {
    console.log("Todo app");
  });

  function handleOnTodosListClick(todo) {
    console.log(todo);
    let idx = todos.findIndex((s) => s.id === todo.id);
    let newTodos = [...todos];
    newTodos.splice(idx, 1);
    setToDos(newTodos);
  }

  function handleJobClick() {
    let newTodos = [
      ...todos,
      { id: todos.length + 1, title: "test" + (todos.length + 1) },
    ];
    setToDos(newTodos);
  }

  function handleTodoFormSubmit(formValues) {
    console.log(formValues);

    let newTodo = {
      id: todos.length + 1,
      ...formValues,
    };
    let newTodos = [...todos, newTodo];
    setToDos(newTodos);
  }

  function handlePageChange(newPage) {
    console.log(newPage);
    setFilters({
      ...filters,
      _page: newPage
    })
  }

  function handleFiltersChange(newFilters){
    console.log(newFilters);
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.searchTerm
    })
  }

  const [showClock, setShowClock] = useState(true);

  return (
    <div className="app">
      {/* <ColorBox />

      <button onClick={handleJobClick}>Add</button>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todos} onTodoClick={handleOnTodosListClick} /> */}
      <PostFiltersForm onSubmit={handleFiltersChange}/>
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
      {showClock && <Clock />}
      <button onClick={() => setShowClock(false)}>Hide Clock</button>
      <BeautifulClock />
      <MagicBox />
    </div>
  );
}

export default App;
