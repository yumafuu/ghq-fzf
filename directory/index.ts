import { config } from "../config";

type Item = {
  fullpath: string;
  display: string;
};

export const GetDirs = async ($): Promise<Item[]> => {
  const ghqroot = (await $`ghq root`.text()).trim();
  const ghqlist = (await $`ghq list`.text()).split("\n").filter(Boolean);

  const list: Item[] = [];
  for (const ghqitem of ghqlist) {
    list.push({ fullpath: `${ghqroot}/${ghqitem}`, display: ghqitem });
  }

  for (const dir of config.dirs) {
    // replace ~ which is first char with $HOME
    const fullpath = dir.replace(/^~/, process.env.HOME);
    list.push({ fullpath , display: dir });
  }

  return list
}
