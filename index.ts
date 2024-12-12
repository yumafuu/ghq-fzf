import {
  Run as RunCommand,
  List as ListCommand,
  Fullpath as FullpathCommand,
} from "./command";
import type { Command } from "./command";
import type { ShellRunner } from "./shell";

const commandMapping: { [key: string]: Command } = {
  "run": RunCommand,
  "fullpath": FullpathCommand,
  "list": ListCommand,
  "help": (_, __) => {
    console.log(`ghq-fzf:

USAGE:
run:
  Search and change dir

fullpath <target>:
  Show fullpath of the directory

list:
  List all directories
`)
  }
  ,
 }

export const Runner = async (
  shellRunner: ShellRunner,
  command: string,
  args: string[],
) => {
  const commandFn = commandMapping[command];

  if (commandFn) {
    await commandFn(shellRunner, args);
  } else {
    console.error(`Unknown command: ${command}`);
  }
};
