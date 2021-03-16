import axios, {AxiosResponse} from "axios";

const baseUrl: string = 'http://localhost:8080';

export const deleteTodo = async (id: string) => {
  try {
    const res: AxiosResponse<TodoDTO[]> = await axios.delete(`${baseUrl}/todo/${id}`);
    return res.data;
  } catch (e) {
    throw new Error(e);
  }
};
