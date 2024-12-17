import { ShellRunner } from "../shell";
import { ModulesContainer } from "../module";

export type Command = (
  shellRunner: ShellRunner,
  args: string[],
  module: ModulesContainer
) => Promise<string>;

export { List } from "./list";
export { Run } from "./run";
export { Fullpath } from "./fullpath";
export { Help } from "./help";
