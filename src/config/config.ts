import { parse } from "yaml";

export type Config = {
  fzf: {
    preview: string;
  };
  ghq: {
    showFullpath: Boolean;
    nested: Array<{
      root: string;
      dirs: string[];
    }>;
    exclude: string[];
  }
  external: string[];
};

export const GetConfig = async (): Promise<Config> => {
  const DEFAULT_CONFIG = `${Bun.env.HOME}/.config/ghq-fzf/config.yaml`;
  const configFilePath = Bun.env.GHQ_FZF_CONFIG || DEFAULT_CONFIG;
  const configFile = await Bun.file(configFilePath).text();
  const configRaw: any = parse(configFile);

  const config = FillConfigOptionalFields(configRaw);
  return config;
}

export const FillConfigOptionalFields = (configRaw: any): Config => {
  const config: Config = {
    fzf: {
      preview: configRaw.fzf?.preview || "",
    },
    ghq: {
      showFullpath: configRaw.ghq?.showFullpath || false,
      nested: configRaw.ghq?.nested || [],
      exclude: configRaw.ghq?.exclude || [],
    },
    external: configRaw.external || [],
  }

  return config
}
