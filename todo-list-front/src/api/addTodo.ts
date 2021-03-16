import axios, {AxiosResponse} from "axios";

const baseUrl: string = 'http://localhost:8080';

export const addTodo = async (msg: string) => {
  try {
    const res: AxiosResponse<TodoDTO[]> = await axios.post(
      `${baseUrl}/todo`,
      {msg},
      {headers: {'Content-Type': 'application/json'}});
    return res.data;
  } catch (e) {
    throw new Error(e);
  }
};
