import React from 'react';
import TodoList from "./components/TodoList";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container-fluid">
      <div className="row jumbotron text-center">
        <h1 className="h-25">TODO List</h1>
      </div>
      <TodoList/>
    </div>
  );
}

export default App;
