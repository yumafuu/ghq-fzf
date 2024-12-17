import { parse } from "yaml";

export type Config = {
  fzf: {
    preview: string;
  };
  nested: Array<{
    root: string;
    dirs: string[];
  }>;
  external: string[];
};

export const GetConfig = async (): Promise<Config> => {
  const DEFAULT_CONFIG = `${Bun.env.HOME}/.config/ghq-fzf/config.yaml`;
  const configFilePath = Bun.env.GHQ_FZF_CONFIG || DEFAULT_CONFIG;
  const configFile = await Bun.file(configFilePath).text();
  const config: Config = parse(configFile);

  return config;
}
