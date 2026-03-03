export const FLUTTER = {
  requirements: {
    name: 'Requirements',
  },
  commands: {
    name: 'Commands',
    create: {
      name: 'create',
      command: 'flutter create my_app',
    },
    run: {
      name: 'run',
      command: 'flutter run',
    },
  },
  variables: {
    name: 'Variables',
    const: {
      name: 'const',
      mutable: false,
      details:
        "Variables that use the 'const' keyword can't be reassigned.\n Its value is locked when the code compiles, improving performace.\n This does not work with functions since that value is received once code runs.",
    },
    final: {
      name: 'final',
      mutable: false,
      details:
        "Variables that use the 'final' keyword can't be reassigned.\n Its value is locked when the code is executed.",
    },
    var: {
      name: 'var',
      mutable: true,
      details: "Variables that use the 'var' keyword can be reassigned",
    },
  },
  functions: {
    name: 'Functions',
    parameters: {
      named: {
        name: 'named parameters',
        define: 'add({a, b})',
        call: "add(b: 5, a: 3);\n The order of the arguments doesn't matter.\n 5 will be assigned to b.\n 3 will be assigned to a.",
        details: 'The name of an argument determines which parameter receives the value.',
        required: 'Named arguments are optional by default.',
        optional:
          "To make a named parameter required, add the 'required' keyword → add({a, required b})",
      },
      positional: {
        name: 'positional parameters',
        define: 'add(a, b)',
        call: 'add(5, 3);\n The order of the arguments matters.\n 5 will be assigned to a\n 3 will be assigned to b',
        details: 'The position of an argument determines which parameter receives the value.',
        required: 'Positional parameters are required by default.',
        optional: 'To make a positional parameter optional, add square brackets → add(a, [b])',
      },
    },
  },
  conditionals: { name: 'Conditionals' },
  loops: { name: 'Loops' },
  state: { name: 'State' },
  routing: { name: 'Routing' },
  http: { name: 'HTTP' },
  widgets: { name: 'Widgets' },
};
