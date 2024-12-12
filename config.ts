import { parse } from "yaml";

type Config = {
  fzf: {
    preview: string;
  };
  dirs: string[];
};

export const GetConfig = async (): Promise<Config> => {
  const DEFAULT_CONFIG = () => `${process.env.HOME}/.config/ghq-fzf/config.yaml`;
  const configFilePath = () => process.env.GHQ_FZF_CONFIG || DEFAULT_CONFIG;
  const configFile = await Bun.file(configFilePath).text();
  const config: Config = parse(configFile);

  return config;
}
