import { config } from "../config";

type Item = {
  fullpath: string;
  display: string;
};

export const GetDirs = async ($): Promise<Item[]> => {
  const ghqroot = (await $`ghq root`.text()).trim();
  const ghqlist = (await $`ghq list`.text()).split("\n").filter(Boolean);
  const nestedList = config?.nested?.reduce((acc, item) => {
    acc[item.root] = item.dirs;
    return acc;
  }, {}) || {};


  const list: Item[] = [];
  for (const ghqitem of ghqlist) {
    const additions = nestedList[ghqitem] || [];
    list.push({ fullpath: `${ghqroot}/${ghqitem}`, display: ghqitem });

    for (const dir of additions) {
      const fullpath = `${ghqroot}/${ghqitem}/${dir}`;
      const display = `${ghqitem}/${dir}`;

      list.push({ fullpath, display });
    }
  }

  for (const dir of config.external) {
    // replace ~ which is first char with $HOME
    const fullpath = dir.replace(/^~/, Bun.env.HOME);
    list.push({ fullpath , display: dir });
  }

  return list
}
