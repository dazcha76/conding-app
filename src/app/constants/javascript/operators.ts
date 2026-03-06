import { Category } from '../../models/models';

export const JAVASCRIPT_OPERATORS: Record<string, Category> = {
  equality: {
    title: 'Equality and relational operators',
    documentation: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators',
    items: {
      'loose-equal': {
        id: 'loose-equal',
        documentation:
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality',
        name: 'Equality',
        code: '==',
        example: '"2" == 2',
        output: '// returns true',
        bullets: [
          'Checks whether its two operands are equal (value only)',
          'It attempts to convert and compare operands that are of different types',
          'Avoid using as it performs unpredictable type coercion',
        ],
      },
      'strict-equal': {
        id: 'strict-equal',
        documentation:
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality',
        name: 'Strict equality',
        code: '===',
        example: '"2" === 2',
        output: '// returns false',
        bullets: [
          'Checks whether its two operands are equal, returning a Boolean result',
          'Always considers operands of different types to be different',
        ],
      },
      'loose-not-equal': {
        id: 'loose-not-equal',
        documentation:
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Inequality',
        name: 'Inequality',
        code: '!=',
        example: '"2" != 2',
        output: '// returns false',
        bullets: [
          'Checks whether its two operands are not equal, returning a Boolean result',
          'It attempts to convert and compare operands that are of different types',
        ],
      },
      'strict-not-equal': {
        id: 'strict-not-equal',
        documentation:
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality',
        name: 'Strict inequality',
        code: '!==',
        example: '"2" === 2',
        output: '// returns true',
        bullets: ['Checks whether its two operands are not equal, returning a Boolean result'],
      },
      'greater-than': {
        id: 'greater-than',
        documentation:
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than',
        name: 'Greater than',
        code: '>',
        example: '3 > 2',
        output: '// returns true',
        bullets: [
          'Returns true if the left operand is greater than the right operand, and false otherwise',
        ],
      },
      'less-than': {
        id: 'less-than',
        documentation:
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than',
        name: 'Less than',
        code: '<',
        example: '3 < 2',
        output: '// returns false',
        bullets: [
          'Returns true if the left operand is less than the right operand, and false otherwis.',
        ],
      },
      'greater-or-equal': {
        id: 'greater-or-equal',
        documentation:
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal',
        name: 'Greater than or equal',
        code: '>=',
        example: '3 >= 3',
        output: '// returns true',
        bullets: [
          'Returns true if the left operand is greater than or equal to the right operand, and false otherwise',
        ],
      },
      'less-or-equal': {
        id: 'less-or-equal',
        documentation:
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal',
        name: 'Less than or equal',
        code: '<=',
        example: '3 <= 2',
        output: '// returns false',
        bullets: [
          'Returns true if the left operand is less than or equal to the right operand, and false otherwise',
        ],
      },
    },
  },
  logical: {
    title: 'Logical operators',
    documentation: '',
    items: {
      not: {
        id: 'not',
        documentation:
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT',
        name: 'Logical NOT',
        code: '!',
        example: '!true',
        output: '// returns false',
        bullets: ['Inverts the expression that follows (changes false to true, and vice versa)'],
      },
      or: {
        id: 'or',
        documentation:
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR',
        name: 'Logical OR',
        code: '||',
        example: 'true || false',
        output: '// returns true',
        bullets: [
          'Returns true if one or more of its operands is true, and false otherwise (IF using booleans)',
          'To see how it handles non-boolean values, review their documentation.',
        ],
      },
      and: {
        id: 'and',
        documentation:
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND',
        name: 'Logical AND',
        code: '&&',
        example: 'true && false',
        output: '// returns false',
        bullets: ['It will be true if all the operands are true. Otherwise it will be false'],
      },
    },
  },
};
