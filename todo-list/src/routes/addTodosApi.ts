import {Express} from "express";
import {ApiData, TodoDTO} from "../types";
import {ParsedUrlQuery} from "querystring";

let apiData: ApiData = new ApiData([
  new TodoDTO({msg: 'Começar projeto X', status: true}),
  new TodoDTO({msg: 'Code Review da feature Y', status: false})
]);

const addTodosApi: Function = (app: Express) => {
  app.get('/todos', (req, res) => {
    res.send(apiData.todos);
  });

  app.get('/todo/:id', (req, res) => {
    const id: string = req.params.id;
    const todo: TodoDTO | undefined = apiData.getTodo(id);
    if (todo) {
      res.status(200).send(todo);
    } else {
      res.status(204).send();
    }
  });

  app.delete('/todo/:id', (req, res) => {
    const {id} = req.params;
    if (id) {
      apiData.deleteTodo(id);
      res.status(200).send(apiData.todos);
    } else {
      throw new Error(`Todo with ID ${id} not found`);
    }
  });

  app.post('/todo', (req, res) => {
    const todo: TodoDTO = new TodoDTO(req.body);
    const error = todo.validate();
    if (error !== null) {
      res.status(error.status).send(error.reason);
    } else {
      apiData.addTodo(todo);
      res.status(200).send(apiData.todos);
    }
  });

  app.put('/todo', (req, res) => {
    const todo: TodoDTO = new TodoDTO(req.body);
    const error = todo.validate();
    if (error !== null) {
      res.status(error.status).send(error.reason);
    } else {
      apiData.updateTodo(todo);
      res.status(200).send(apiData.todos);
    }
  });
};

export default addTodosApi;
