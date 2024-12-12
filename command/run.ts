import { GetConfig } from "../config";
import type { Command } from ".";
import { GetDirs } from "../directory";

export const Run: Command = async ($) => {
  const config = await GetConfig();
  const dirs = await GetDirs($);
  const fzfitem = dirs.map((item) => item.display).join("\n");

  const preview = config.fzf?.preview || "echo {}";

  const selected =
    (await $`echo ${fzfitem} | fzf --preview '${preview}'`.text())
      .trim();

  if (selected) {
    const item = dirs.find((item) => item.display === selected);
    if (!item) {
      console.error("Item not found");
      return
    }

    console.log(`cd ${item.fullpath}`);
  }
};
