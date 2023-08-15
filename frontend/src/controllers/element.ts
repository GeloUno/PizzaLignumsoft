import axios, { AxiosResponse } from 'axios';
import { IElement } from '../interfaces/element';

export async function getAllElement(): Promise<AxiosResponse<Array<IElement>>> {
  const result = await axios.get(`/api/element`);
  return result;
}
export async function getElementById(
  id: string
): Promise<AxiosResponse<IElement>> {
  const result = await axios.get(`/api/element/${id}`);
  return result;
}

export async function getAllElementByAction(
  id: string
): Promise<AxiosResponse<Array<IElement>>> {
  const result = await axios.get(`/api/element/byaction/${id}`);
  return result;
}
