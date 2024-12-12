import { ShellRunner } from "../shell";

export type Command = (
  shellRunner: ShellRunner,
  args: string[]
) => Promise<void>;

export { List } from "./list";
export { Run } from "./run";
export { Fullpath } from "./fullpath";
