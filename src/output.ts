export interface IOutput {
  print(message: string): void;
}

export const printConsole: IOutput = {
  print: (message: string) => console.log(message),
};
