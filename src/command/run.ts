import { config } from "../config";
import type { Command } from ".";
import { GetDirs } from "../module/GetDirs";

export const Run: Command = async ($): Promise<string> => {
  const dirs = await GetDirs($);
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
