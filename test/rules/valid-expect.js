// DEPRECATED use expect-matcher and expect-single-argument rules instead
'use strict'

var rule = require('../../lib/rules/valid-expect')
var RuleTester = require('eslint').RuleTester

var eslintTester = new RuleTester()

eslintTester.run('valid-expect', rule, {
  valid: [
    'expect("something").toEqual("else");',
    'expect(true).toBeDefined();',
    'expect(undefined).not.toBeDefined();'
  ],

  invalid: [
    {
      code: 'expect([1, 2, 3]).toBe([1, 2, 3]);',
      errors: [
        {
          message: 'Both expect and verification argument should not be same'
        }
      ]
    },
    {
      code: 'expect(true).toBe(true);',
      errors: [
        {
          message: 'Both expect and verification argument should not be same'
        }
      ]
    },
    {
      code: 'expect().toBe(true);',
      errors: [
        {
          message: 'No arguments passed to expect()'
        }
      ]
    },
    {
      code: 'expect().toEqual("something");',
      errors: [
        {
          message: 'No arguments passed to expect()'
        }
      ]
    },
    {
      code: 'expect("something", "else").toEqual("something");',
      errors: [
        {
          message: 'More than one argument passed to expect()'
        }
      ]
    },
    {
      code: 'expect("something");',
      errors: [
        {
          message: 'Matcher was not called'
        },
        {
          message: 'Nothing called on expect()'
        }
      ]
    },
    {
      code: 'expect();',
      errors: [
        {
          message: 'No arguments passed to expect()'
        },
        {
          message: 'Matcher was not called'
        },
        {
          message: 'Nothing called on expect()'
        }
      ]
    },
    {
      code: 'expect(true).toBeDefined;',
      errors: [
        {
          message: 'Matcher was not called'
        }
      ]
    }
  ]
})
