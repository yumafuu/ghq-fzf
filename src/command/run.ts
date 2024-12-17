import { config } from "../config";
import type { Command } from ".";
import type { ModulesContainer } from "../module";
import type { ShellRunner } from "../module/shell/types.ts";

export const Run: Command = async (
  $: ShellRunner,
  _args: string[],
  modules: ModulesContainer,
): Promise<string> => {
  const dirs = await modules.ghq.GetDirs($);
  const fzfitem = dirs.map((item) => item.display).join("\n");

  const preview = config?.fzf?.preview || "echo {}";

  const selected =
    (await $`echo ${fzfitem} | fzf --preview '${preview}'`.text())
      .trim();

  if (selected) {
    const item = dirs.find((item) => item.display === selected);
    if (!item) {
      return "Item not found"
    }

    return `cd ${item.fullpath}`
  }

  return "";
};
