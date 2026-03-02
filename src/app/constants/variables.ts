export interface Variables {}

export const VARIABLES = {
  immutable: {
    flutter: [
      {
        name: 'const',
        details:
          "Variables that use the 'const' keyword can't be reassigned.\n Its value is locked when the code compiles, improving performace.\n This does not work with functions since that value is received once code runs.",
      },
      {
        name: 'final',
        details:
          "Variables that use the 'final' keyword can't be reassigned.\n Its value is locked when the code is executed.",
      },
    ],
  },
  mutable: {
    flutter: {
      name: 'var',
      details: "Variables that use the 'var' keyword can be reassigned",
    },
  },
  naming: {
    flutter: {
      style: 'camel case',
      example: 'userName',
    },
  },
};
