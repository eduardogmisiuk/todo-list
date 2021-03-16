import axios, {AxiosResponse} from "axios";

const baseUrl: string = 'http://localhost:8080';

export const getTodos = async () => {
  try {
    const res: AxiosResponse<TodoDTO[]> = await axios.get(`${baseUrl}/todos`);
    return res.data;
  } catch (e) {
    throw new Error(e);
  }
};
