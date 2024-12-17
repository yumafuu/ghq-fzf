import { parseArgs } from "util";
import { $ } from "bun";
import { Runner } from "./src/runner.ts";
import { printConsole } from "./src/output.ts";

const { positionals } = parseArgs({
  args: Bun.argv.slice(2),
  options: {},
  strict: true,
  allowPositionals: true,
});

let command = positionals[0];
if (!command) {
  command = "help";
}
const args = positionals.slice(1);

Runner($, printConsole, command, args);
