import { config } from "../config";
import type { Command } from "./index";

type Item = {
  fullpath: string;
  display: string;
};

export const RunCommand: Command = async ($) => {
  const ghqroot = (await $`ghq root`.text()).trim();
  const ghqlist = (await $`ghq list`.text()).split("\n").filter(Boolean);

  const list: Item[] = [];
  for (const ghqitem of ghqlist) {
    list.push({ fullpath: `${ghqroot}/${ghqitem}`, display: ghqitem });
  }

  for (const dir of config.dirs) {
    list.push({ fullpath: dir, display: dir });
  }

  const fzfitem = list.map((item) => item.display).join("\n");

  const selected =
    (await $`echo ${fzfitem} | fzf --preview '${config.fzf.preview}'`.text())
      .trim();

  if (selected) {
    const item = list.find((item) => item.display === selected);
    if (!item) {
      console.error("Item not found");
      return
    }

    console.log(`cd ${item.fullpath}`);
  }
};
