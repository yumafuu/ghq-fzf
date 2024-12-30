import { expect, test } from "bun:test";
import { NewTestShellRunner } from "../test/shell.ts";
import { NewTestModules } from "../test/modules.ts";
import { NewMockConfig } from "../config/mockconfig.ts";

import type { GhqItem } from "../module/ghq/index.ts";

import { Run } from "./run.ts";

const mockPaths: GhqItem[] = [
  { fullpath: "/path/to/test1", display: "path1" },
  { fullpath: "/path/to/test2", display: "path2" },
]
const testModules = NewTestModules(mockPaths);
const mockConfig = NewMockConfig({ external: ["add1"] });

test("[OK] show all paths", async () => {
  const shell = NewTestShellRunner({"echo path1\npath2 | fzf --preview 'echo {}'": "path1"});
  const result = await Run(shell, [], testModules, mockConfig);

  expect(result).toBe("cd /path/to/test1");
});
