import { User } from "@/types/User";
import axios from "axios";

const fetchUserTableUrl = "https://3ow9ltt4d8.execute-api.ap-northeast-1.amazonaws.com/manganuma01";

export const fetchUserTable = async (): Promise<User> => {
  const result = axios.get(fetchUserTableUrl);
  return (await result).data[0];
}
