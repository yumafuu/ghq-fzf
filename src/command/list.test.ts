import { expect, test } from "bun:test";
import { NewTestShellRunner } from "../test/shell.ts";
import { NewTestModules } from "../test/modules.ts";
import { NewMockConfig } from "../test/config.ts";
import type { GhqItem } from "../module/ghq/index.ts";

import { List } from "./list.ts";

const mockPaths: GhqItem[] = [
  { fullpath: "/path/to/test1", display: "path1" },
  { fullpath: "/path/to/test2", display: "path2" },
]
const testModules = NewTestModules(mockPaths);
const mockConfig = NewMockConfig("", [], []);
const TestShellRunner = NewTestShellRunner({});

test("[OK] show all paths", async () => {
  const result = await List(TestShellRunner, [], testModules, mockConfig);

  expect(result).toBe("path1\npath2");
});
