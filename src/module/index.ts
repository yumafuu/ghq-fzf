import { ghq } from './ghq'
import { printStdout } from './output'

export const modulesContainer = {
  ghq: ghq,
  output: printStdout,
}

export type ModulesContainer = typeof modulesContainer
