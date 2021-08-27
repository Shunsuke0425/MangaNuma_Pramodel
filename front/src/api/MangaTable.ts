import { Book } from "@/types/Book";
import axios from "axios";

const fetchMangaTableUrl =
  "https://qs20lnjxwb.execute-api.ap-northeast-1.amazonaws.com/manganuma02";

export const fetchMangaTable = async (): Promise<Book[]> => {
  const result = axios.get(fetchMangaTableUrl);
  return (await result).data;
};
