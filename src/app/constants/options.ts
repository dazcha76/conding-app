export const PROGRAMMING_LANGUAGES = [
  {
    name: 'JavaScript',
    id: 'javascript',
    frameworks: [
      { name: 'Angular', id: 'angular' },
      { name: 'React', id: 'react' },
      // { name: 'Vue', id: 'vue' },
    ],
  },
  {
    name: 'Dart',
    id: 'dart',
    frameworks: [
      // { name: 'Angel', id: 'angel' }
      { name: 'Flutter', id: 'flutter' },
    ],
  },
];

export const CATEGORIES = [
  { code: 'requirements', name: 'Requirements' },
  { code: 'commands', name: 'Commands' },
  { code: 'variables', name: 'Variables' },
  { code: 'functions', name: 'Functions' },
  { code: 'loops', name: 'Loops' },
  { code: 'state', name: 'State' },
  { code: 'data', name: 'Data' },
  { code: 'routing', name: 'Routing' },
  { code: 'http', name: 'HTTP' },
];

export const SUBCATEGORIES = {
  commands: [
    { code: 'create', name: 'Create' },
    { code: 'run', name: 'Run' },
  ],
};
