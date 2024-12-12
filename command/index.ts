import { ShellRunner } from "../shell";

export type Command = (shellRunner: ShellRunner) => Promise<void>;

export { RunCommand } from "./run";
export { HelpCommand } from "./help";
