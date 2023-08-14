import axios, { AxiosResponse } from 'axios';
import { IAction } from '../interfaces/action';

export async function getAllActionByElement(
  id: string
): Promise<AxiosResponse<Array<IAction>>> {
  const result = await axios.get(`api/action/byelement/${id}`);
  return result;
}
