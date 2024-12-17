import type { Command } from ".";

export const Help: Command = async (_$, _args: string[]): Promise<string> => {
  return `ghq-fzf:

USAGE:
run:
Search and change dir

fullpath <target>:
Show fullpath of the directory

list:
List all directories
`
};
