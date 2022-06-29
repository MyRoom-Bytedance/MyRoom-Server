import {User} from "../entity/user";

export type ProjectRequest = {
  id?: number;
  name: string;
  content: string;
}