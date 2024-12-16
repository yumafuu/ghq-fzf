import type { Command } from ".";
import { GetDirs } from "../directory";

export const Help: Command = async ($, args: string[]) => {
  console.log(`ghq-fzf:

USAGE:
run:
Search and change dir

fullpath <target>:
Show fullpath of the directory

list:
List all directories
`)
};
