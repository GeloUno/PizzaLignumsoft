import axios, { AxiosResponse } from 'axios';
import { IAction } from '../interfaces/action';

export async function getAllAction(): Promise<AxiosResponse<Array<IAction>>> {
  const result = await axios.get(`api/action`);
  return result;
}
export async function getActionById(
  id: string
): Promise<AxiosResponse<IAction>> {
  const result = await axios.get(`api/action/${id}`);
  return result;
}

export async function getAllActionByElement(
  id: string
): Promise<AxiosResponse<Array<IAction>>> {
  const result = await axios.get(`api/action/byelement/${id}`);
  return result;
}
