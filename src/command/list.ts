import type { ModulesContainer } from "../module";
import type { ShellRunner } from "../module/shell/types.ts";
import type { Config } from "../config/config.ts";

export const List = async (
  $: ShellRunner,
  __args: string[],
  modules: ModulesContainer,
  config: Config,
): Promise<string> => {
  const dirs = await modules.ghq.GetDirs($, config);
  const fzfitems = dirs.map((item) => item.display).join("\n");

  return fzfitems;
};
