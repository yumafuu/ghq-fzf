import type { Config } from '../config/config.ts';

export const NewMockConfig = (
  fzfPreview: string,
  nested: Array<{
    root: string;
    dirs: string[];
  }>,
  external: string[],
): Config => {
  const config: Config = {
    fzf: {
      preview: fzfPreview,
    },
    nested,
    external,
  }

  return config;
}
