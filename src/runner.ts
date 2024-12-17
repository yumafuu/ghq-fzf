import {
  Run as RunCommand,
  List as ListCommand,
  Fullpath as FullpathCommand,
  Help as HelpCommand,
} from "./command";

import type { Command } from "./command";
import type { Config } from "./config/config.ts";
import type { ShellRunner } from "./module/shell/types.ts";
import type { ModulesContainer } from "./module/index.ts";

const commandMapping: { [key: string]: Command } = {
  "run": RunCommand,
  "fullpath": FullpathCommand,
  "list": ListCommand,
  "help": HelpCommand,
 }

export const Runner = async (
  shellRunner: ShellRunner,
  modules: ModulesContainer,
  config: Config,
  command: string,
  args: string[],
) => {
  const commandFn = commandMapping[command];

  if (commandFn) {
    const result = await commandFn(shellRunner, args, modules, config);
    modules.output.print(result);
  } else {
    console.error(`Unknown command: ${command}`);
  }
};
