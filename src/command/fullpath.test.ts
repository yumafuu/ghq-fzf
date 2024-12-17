import { expect, test } from "bun:test";
import { NewTestShellRunner } from "../test/shell.ts";
import { NewTestModules } from "../test/modules.ts";
import { NewMockConfig } from "../test/config.ts";

import type { GhqItem } from "../module/ghq/index.ts";

import { Fullpath } from "./fullpath";

const mockPaths: GhqItem[] = [
  { fullpath: "/path/to/test1", display: "path1" },
  { fullpath: "/path/to/test2", display: "path2" },
]
const testModules = NewTestModules(mockPaths);
const mockConfig = NewMockConfig("", [], ["/add1", "/add2"]);
const TestShellRunner = NewTestShellRunner({});

test("[OK] exists path", async () => {
  const result = await Fullpath(TestShellRunner, ["path1"], testModules, mockConfig);

  expect(result).toBe("/path/to/test1");
});

test("[NG] not exists path", async () => {
  const result = await Fullpath(TestShellRunner, ["path3"], testModules, mockConfig);

  expect(result).toBe("Item not found");
});
