import type { ModulesContainer } from "../module";
import type { ShellRunner } from "../module/shell/types.ts";

export const List = async (
  $: ShellRunner,
  __args: string[],
  modules: ModulesContainer,
): Promise<string> => {
  const dirs = await modules.ghq.GetDirs($);
  const fzfitems = dirs.map((item) => item.display).join("\n");

  return fzfitems;
};
