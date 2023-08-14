import axios, { AxiosResponse } from 'axios';
import { IElement } from '../interfaces/element';

export async function getAllElementByAction(
  id: string
): Promise<AxiosResponse<Array<IElement>>> {
  const result = await axios.get(`api/element/byaction/${id}`);
  return result;
}
