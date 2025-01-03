export interface IOutput {
  print(message: string): void;
}

export const printStdout: IOutput = {
  print: (message: string) => console.log(message),
};
