import { expect, test } from "bun:test";
import { NewTestShellRunner } from "../../test/shell.ts";
import { NewMockConfig } from "../../config/mockconfig.ts";

import { GetDirs } from "./GetDirs.ts";


test("[OK] get dirs correctory (ghq showFullpath true)", async () => {
  const mockConfig = NewMockConfig({
    showFullpath: true,
    ghq: {
      showFullpath: true,
      nested: [
        { root: "/path/to/path1", dirs: ["aa", "bb"] }
      ],
    },
    external: ["/add1", "/add2"],
  });

  const TestShellRunner = NewTestShellRunner({
    "ghq list -p": "/path/to/path1\n/path/to/path2",
    "ghq root": "/path/to",
  });

  const result = await GetDirs(TestShellRunner, mockConfig);

  const want = [
    { fullpath: "/path/to/path1", display: "/path/to/path1" },
    { fullpath: "/path/to/path1/aa", display: "/path/to/path1/aa" },
    { fullpath: "/path/to/path1/bb", display: "/path/to/path1/bb" },
    { fullpath: "/path/to/path2", display: "/path/to/path2" },
    { fullpath: "/add1", display: "/add1" },
    { fullpath: "/add2", display: "/add2" },
  ]
  expect(result).toMatchObject(want);
});

test("[OK] get dirs correctory (ghq showFullpath false)", async () => {
  const mockConfig = NewMockConfig({
    ghq: {
      showFullpath: false,
      nested: [
        { root: "path1", dirs: ["aa", "bb"] }
      ],
    },
    external: ["/add1", "/add2"],
  });

  const TestShellRunner = NewTestShellRunner({
    "ghq list ": "path1\npath2",
    "ghq root": "/path/to",
  });

  const result = await GetDirs(TestShellRunner, mockConfig);

  const want = [
    { fullpath: "/path/to/path1", display: "path1" },
    { fullpath: "/path/to/path1/aa", display: "path1/aa" },
    { fullpath: "/path/to/path1/bb", display: "path1/bb" },
    { fullpath: "/path/to/path2", display: "path2" },
    { fullpath: "/add1", display: "/add1" },
    { fullpath: "/add2", display: "/add2" },
  ]
  expect(result).toMatchObject(want);
});
