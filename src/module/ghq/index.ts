import { GetDirs } from './GetDirs'

export interface IGHQ {
  GetDirs: typeof GetDirs
}

export const ghq: IGHQ = {
  GetDirs,
}
