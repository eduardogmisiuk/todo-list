import {v4 as uuidv4} from "uuid";
import HTTPError from "./errors/HTTPError";
import ErrorNoMsgParameter from "./errors/ErrorNoMsgParameter";


class TodoDTO {
  public msg: string;
  public status: boolean;
  private readonly _id: string;

  constructor(body: any) {
    this.msg = body.msg;
    this.status = body.status === undefined ? false : body.status;
    this._id = body._id === undefined ? uuidv4() : body._id;
  }

  validate(): HTTPError | null {
    if (this.msg === undefined) {
      return new ErrorNoMsgParameter();
    }
    return null;
  }

  get id(): string {
    return this._id;
  }
}

class ApiData {
  public todos: TodoDTO[];

  constructor(todos: TodoDTO[]) {
    this.todos = todos;
  }

  addTodo(todo: TodoDTO) {
    this.todos.push(todo);
  }

  getTodo(id: string): TodoDTO | undefined {
    return this.todos.find((value) => value.id === id);
  }

  deleteTodo(id: string) {
    const deletedTodo: TodoDTO | undefined = this.todos.find((todo) => todo.id === id);
    if (deletedTodo) {
      this.todos = this.todos.filter((value => value.id !== deletedTodo.id));
    }
  }

  updateTodo(updatedTodo: TodoDTO) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === updatedTodo.id) {
        return updatedTodo;
      } else {
        return todo;
      }
    });
  }
}

export {TodoDTO, ApiData};
