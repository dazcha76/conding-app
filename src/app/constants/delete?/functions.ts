export interface Functions {}

export const FUNCTIONS = {
  parameters: {
    named: {
      flutter: {
        define: 'add({a, b})',
        call: "add(b: 5, a: 3);\n The order of the arguments doesn't matter.\n 5 will be assigned to b.\n 3 will be assigned to a.",
        details: 'The name of an argument determines which parameter receives the value.',
        required: 'Named arguments are optional by default.',
        optional:
          "To make a named parameter required, add the 'required' keyword → add({a, required b})",
      },
    },
    positional: {
      flutter: {
        define: 'add(a, b)',
        call: 'add(5, 3);\n The order of the arguments matters.\n 5 will be assigned to a\n 3 will be assigned to b',
        details: 'The position of an argument determines which parameter receives the value.',
        required: 'Positional parameters are required by default.',
        optional: 'To make a positional parameter optional, add square brackets → add(a, [b])',
      },
    },
  },
};
