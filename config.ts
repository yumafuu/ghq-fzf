import { parse } from "yaml";

type Config = {
  fzf: {
    preview: string;
  };
  dirs: string[];
};

const DEFAULT_CONFIG = `${Bun.env.HOME}/.config/ghq-fzf/config.yaml`;
const configFilePath = Bun.env.GHQ_FZF_CONFIG || DEFAULT_CONFIG;
const configFile = await Bun.file(configFilePath).text();
const config: Config = parse(configFile);

export { config };
