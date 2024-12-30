import type { Config } from '../config/config.ts';
import { FillConfigOptionalFields } from '../config/config.ts';

export const NewMockConfig = (mockconfig: any = {}): Config => {
  const config = FillConfigOptionalFields(mockconfig);

  return config;
}
