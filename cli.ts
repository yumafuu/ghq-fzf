import { parseArgs } from "util";
import { Runner } from "./index.ts";
import { $ } from "bun";

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

Runner($, command, args);
