import axios, { AxiosResponse } from 'axios';
import { IPizza } from '../interfaces/pizza';

export async function getAllPizza(): Promise<AxiosResponse<Array<IPizza>>> {
  const result = await axios.get(`/api/pizza`);
  return result;
}
export async function getDetailPizza(
  pizzaId: string
): Promise<AxiosResponse<IPizza>> {
  const result = await axios.get(`/api/pizza/${pizzaId}`);
  return result;
}
export async function getAllPizzaByElement(
  elementId: string
): Promise<AxiosResponse<Array<IPizza>>> {
  const result = await axios.get(`/api/pizza/byelement/${elementId}`);
  return result;
}
export async function getAllPizzaByAction(
  actionId: string
): Promise<AxiosResponse<Array<IPizza>>> {
  const result = await axios.get(`/api/pizza/byaction/${actionId}`);
  return result;
}
