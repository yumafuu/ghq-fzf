import { ShellRunner } from "../shell";

export type Command = (
  shellRunner: ShellRunner,
  args: string[]
) => Promise<string>;

export { List } from "./list";
export { Run } from "./run";
export { Fullpath } from "./fullpath";
export { Help } from "./help";
