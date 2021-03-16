import React, {useEffect} from "react";
import TodoCard from "./TodoCard";
import {addTodo, deleteTodo, getTodos, updateTodo} from "../api";
import AddTodo from "./AddTodo";

enum TodoListStatus {
  idle,
  waiting,
  resolved,
  rejected,
}

const TodoList: React.FC = () => {
  const [items, setItems] = React.useState<TodoDTO[]>([]);
  const [status, setStatus] = React.useState(TodoListStatus.idle);

  const fetchData: Function = () => {
    if (status === TodoListStatus.waiting) {
      return;
    }

    setStatus(TodoListStatus.waiting);
    getTodos()
      .then((todos) => {
        setItems(todos);
        setStatus(TodoListStatus.resolved);
      })
      .catch((err) => {
        console.error(err);
        setStatus(TodoListStatus.rejected);
      });
  }

  const submitHandler = (msg: string) => {
    addTodo(msg)
      .then((todos) => {
        setItems(todos);
      })
      .catch((e) => {
        console.error(e);
      });
  }

  const onRemoval = (id: string) => {
    deleteTodo(id)
      .then((todos) => {
        setItems(todos);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const onItemUpdate = (todo: TodoDTO) => {
    updateTodo(todo)
      .then((todos) => {
        setItems(todos);
      })
      .catch((e) => {
        console.error(e);
      });
  }

  useEffect(() => {
    fetchData();
  }, [items]);

  if (status === TodoListStatus.resolved) {
    return (
      <>
        <div className="row">
          <AddTodo submitHandler={submitHandler}/>
        </div>
        <div className="row align-content-between">
          {items.map((item: TodoDTO) => <TodoCard key={item._id} item={item} onRemoval={onRemoval}
                                                  onItemUpdate={onItemUpdate}/>)}
        </div>
      </>);
  } else {
    return <div>Loading...</div>;
  }
}

export default TodoList;
