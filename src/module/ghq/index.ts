import { GetDirs } from './GetDirs'

export interface IGHQ {
  GetDirs: typeof GetDirs
}

export type GhqItem = {
  fullpath: string;
  display: string;
};


export const ghq: IGHQ = {
  GetDirs,
}
