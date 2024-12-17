import { ShellRunner } from "../shell";
import { ModulesContainer } from "../module";
import { Config } from "../config/config.ts";

export type Command = (
  shellRunner: ShellRunner,
  args: string[],
  module: ModulesContainer,
  config: Config,
) => Promise<string>;

export { List } from "./list";
export { Run } from "./run";
export { Fullpath } from "./fullpath";
export { Help } from "./help";
