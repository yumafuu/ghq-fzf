import type { Config } from "../../config/config.ts";
import type { GhqItem } from "./index.ts";
import type { ShellRunner } from "../shell/types.ts";

export const GetDirs = async (
  $: ShellRunner,
  config: Config,
): Promise<GhqItem[]> => {
  const showFullpath = config.ghq.showFullpath

  const ghqroot = (await $`ghq root`.text()).trim();
  const ghqlist = (await $`ghq list ${showFullpath ? "-p" : ""}`.text()).split("\n").filter(Boolean);
  const nestedList = config.ghq.nested.reduce((acc, item) => {
    acc[item.root] = item.dirs;
    return acc;
  }, {}) || {};


  const list: GhqItem[] = [];
  for (const ghqitem of ghqlist) {
    let fullpath = "";
    if (showFullpath) {
      fullpath = ghqitem;
    } else {
      fullpath = `${ghqroot}/${ghqitem}`;
    }
    list.push({ fullpath, display: ghqitem });

    const additions = nestedList[ghqitem] || [];
    for (const dir of additions) {
      const addFullpath = `${fullpath}/${dir}`;
      const addDisplay = `${ghqitem}/${dir}`;

      list.push({ fullpath: addFullpath, display: addDisplay });
    }
  }

  for (const dir of config.external) {
    // replace ~ which is first char with $HOME
    const fullpath = dir.replace(/^~/, Bun.env.HOME || "");
    list.push({ fullpath , display: dir });
  }

  return list
}
