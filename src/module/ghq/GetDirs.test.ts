import { expect, test } from "bun:test";
import { NewTestShellRunner } from "../../test/shell.ts";
import { NewTestModules } from "../../test/modules.ts";
import { NewMockConfig } from "../../test/config.ts";

import type { GhqItem } from "./index.ts";
import type { Config } from "../../config/config.ts";
import type { ShellRunner } from "../shell/types.ts";

import { GetDirs } from "./GetDirs.ts";

const mockPaths: GhqItem[] = [
  { fullpath: "/path/to/test1", display: "path1" },
  { fullpath: "/path/to/test2", display: "path2" },
]
const mockConfig = NewMockConfig("", [], ["/add1", "/add2"]);
const TestShellRunner = NewTestShellRunner({
  "ghq list": "path1\npath2",
  "ghq root": "/path/to",
});


test("[OK] get dirs correctory", async () => {
  const result = await GetDirs(TestShellRunner, mockConfig);

  const want = [
    { fullpath: "/path/to/path1", display: "path1" },
    { fullpath: "/path/to/path2", display: "path2" },
    { fullpath: "/add1", display: "/add1" },
    { fullpath: "/add2", display: "/add2" },
  ]
  expect(Bun.deepEquals(result, want)).toBe(true);
});
