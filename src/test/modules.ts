import type { ModulesContainer } from "../module";
import type { ShellRunner } from "../module/shell/types.ts";
import type { GhqItem } from "../module/ghq/index.ts";

export const NewTestModules = (
  ghqPaths: GhqItem[],
): ModulesContainer => {
  return {
    ghq: {
      GetDirs: async (_: ShellRunner) => {
        return Promise.resolve(ghqPaths)
      }
    },
    output: {
      print: async (_: string) => {
        return Promise.resolve();
      }
    }
  }
}
