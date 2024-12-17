export const NewTestShellRunner = (
  mocks: { [key: string]: string } | null = null,
) => {
  return (strings: TemplateStringsArray, ...values: any[]) => {
    return {
      text: () => {
        const fullinput = strings.reduce((acc, str, i) => acc + values[i - 1] + str)
        for (const [ifinput, thenvalue] of Object.entries(mocks || {})) {
          if (fullinput === ifinput) { return Promise.resolve(thenvalue) }
        }

        return Promise.resolve("")
      }
    }
  }
}
