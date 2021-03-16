import {Express} from "express";
import addTodosApi from "./addTodosApi";

const addRoutes: Function = (app: Express) => {
  addTodosApi(app);
}

export default addRoutes;
