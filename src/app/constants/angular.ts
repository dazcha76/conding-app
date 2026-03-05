import { output } from '@angular/core';

export const ANGULAR = {
  lifecycles: {},
  state: {
    initiate: {
      code: 'const count = signal(0)',
      details: "Call the signal function with the signal's initial value.",
    },
    read: {
      code: 'count()',
      details: 'Signals are getter functions - calling them reads their value.',
    },
    update: {
      code: 'count.set(3)',
      details: 'Changes the value of a signal directly.',
    },
    modify: {
      code: 'count.update((value) => value + 1)',
      details:
        'Computed signal are read-only. They compute a new value from the previous one and saves it.',
    },
    readonly: {
      code: '',
      details: 'https://angular.dev/guide/signals#converting-writable-signals-to-readonly',
    },
  },
  data: {
    down: {
      input: {
        details:
          'Inputs are signals. The signal always holds the latest value of the input that is bound from the parent.',
        send: {
          option1: {
            code: 'firstName = input<string>() // Signal<string|undefined>',
            details: 'Optional input with an initial value.',
          },
          option2: {
            code: 'firstName = input.required<string>() // Signal<string>',
            details: 'Required inputs that consumers need to set.',
          },
        },
        receive: {
          code: '',
          details: '',
        },
      },
    },
    up: {
      output: {
        send: {
          step1: {
            code: 'nameChange = output<string>()',
            details: 'Output emits values to parent directives and components.',
          },
          step2: {
            code: 'this.nameChange.emit(newName)',
            details: '',
          },
        },
        receive: {
          option1: {
            code: '(myOutput)="doSomething($event)"',
            details: 'Parents can subscribe to changes via template event bindings.',
          },
          option2: {
            code: 'OutputRef#subscribe',
            details: 'Parents can subscribe to changes via programmatic subscription.',
          },
        },
      },
    },
    both: {
      details: 'A writable signal that acts as both an input and an output simultaneously.',
      version: 'v17.2',
      parent: {
        code: '<app-dropdown [(selected)]="myValue" />',
        details:
          'Since model() creates that automatic output, the parent can now use simple two-way binding.',
      },
      child: {
        code: "selected = model<string>('') // Creates an Input + an Output named 'selectedChange' \n [(ngModel)]='selected'",
        details:
          'It automatically creates an output named [propertyName]Change for you. \n Unlike a standard input(), you can call .set() or .update() on it directly.',
      },
    },
  },
};
