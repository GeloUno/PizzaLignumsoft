import axios, { AxiosResponse } from 'axios';
import { IPizza } from '../interfaces/pizza';

export async function getAllPizzas(): Promise<AxiosResponse<Array<IPizza>>> {
  const result = await axios.get(`api/pizza`);
  return result.data;
}
