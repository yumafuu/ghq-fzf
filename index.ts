import {
  RunCommand,
  HelpCommand,
} from "./command";
import type { Command } from "./command";
import type { ShellRunner } from "./shell";

const commandMapping: { [key: string]: Command } = {
  "run": RunCommand,
  "help": HelpCommand,
}

export const Runner = async (
  command: string,
  shellRunner: ShellRunner,
) => {
  const commandFn = commandMapping[command];

  if (commandFn) {
    await commandFn(shellRunner);
  } else {
    console.error(`Unknown command: ${command}`);
  }
};
