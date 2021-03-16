import axios, {AxiosResponse} from "axios";

const baseUrl: string = 'http://localhost:8080';

export const updateTodo = async (todo: TodoDTO) => {
  try {
    const res: AxiosResponse<TodoDTO[]> = await axios.put(
      `${baseUrl}/todo`,
      todo,
      {headers: {'Content-Type': 'application/json'}});
    return res.data;
  } catch (e) {
    throw new Error(e);
  }
};
