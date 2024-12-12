import type { Command } from ".";
import { GetDirs } from "../directory";

export const Fullpath: Command = async ($, args: string[]) => {
  const target = args[0];
  if (!target) {
    console.error("No target");
    return;
  }

  const dirs = await GetDirs($);
  const fullpath = dirs.find((item) => item.display === target)?.fullpath;

  console.log(fullpath);
};
