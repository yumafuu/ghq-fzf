import { GetDirs } from "../directory";

export const List = async ($) => {
  const dirs = await GetDirs($);
  const fzfitem = dirs.map((item) => item.display).join("\n");

  console.log(fzfitem);
};
