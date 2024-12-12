export const HelpCommand = async () => {
  const help = `ghq-fzf:
  A tool to search and checkout git repositories managed by ghq.

Subcommands:
  run: Search and checkout git repositories managed by ghq.
  root: Show the root directory of the git repositories managed by ghq.
  help: Show this help message.
`
  console.log(help);
};
