import type { Command } from ".";
import { GetDirs } from "../module/GetDirs";

export const Fullpath: Command = async ($, args: string[]): Promise<string> => {
  const target = args[0];
  if (!target) {
    return "No target"
  }

  const dirs = await GetDirs($);
  const fullpath = dirs.find((item) => item.display === target)?.fullpath;
  if (!fullpath) {
    return "Item not found"
  }

  return fullpath;
};
