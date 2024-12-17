import type { Command } from ".";
import type { ModulesContainer } from "../module";
import type { ShellRunner } from "../module/shell/types.ts";
import type { Config } from "../config/config.ts";

export const Fullpath: Command = async (
  $: ShellRunner,
  args: string[],
  modules: ModulesContainer,
  config: Config,
): Promise<string> => {
  const target = args[0];
  if (!target) {
    return "No target"
  }

  const dirs = await modules.ghq.GetDirs($, config);
  const fullpath = dirs.find((item) => item.display === target)?.fullpath;
  if (!fullpath) {
    return "Item not found"
  }

  return fullpath;
};
