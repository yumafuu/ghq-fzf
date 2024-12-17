import { GetDirs } from "../module/GetDirs";

export const List = async ($): Promise<string> => {
  const dirs = await GetDirs($);
  const fzfitems = dirs.map((item) => item.display).join("\n");

  return fzfitems;
};
