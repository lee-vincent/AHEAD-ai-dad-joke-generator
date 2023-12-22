export interface Message {
  text: string;
}
export type AsyncState = null | "loading" | "error" | "complete";