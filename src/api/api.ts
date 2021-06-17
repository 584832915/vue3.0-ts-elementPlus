import axios from './index'
export interface ResponseType<T> {
    code: number,
    data: T
}

export function getItemList<T> () :Promise<ResponseType<T>>{
   return  axios.get(`/itemList/getItemList`);
}
