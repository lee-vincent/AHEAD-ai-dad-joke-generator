export interface User {
  id: string;
}
export interface Message {
  userId: string;
  text: string;
}
export type AsyncState = null | "loading" | "error" | "complete";