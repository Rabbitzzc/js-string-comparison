const assert = require('assert')
const LongestCommonSubsequence = require('../src/main/packages/LongestCommonSubsequence')
const lcs = new LongestCommonSubsequence()

describe('test LongestCommonSubsequence', () => {
    describe('similarity()', () => {
        const testData = [{
                first: 'french',
                second: 'quebec',
                expected: 0.3333333333333333
            },
            {
                first: 'france',
                second: 'france',
                expected: 1
            },
            {
                first: 'healed',
                second: 'sealed',
                expected: 0.8333333333333334
            },
            {
                first: 'web applications',
                second: 'applications of the web',
                expected: 0.6857142857142857
            },

            {
                first: 'a',
                second: 'a',
                expected: 1
            },
            {
                first: 'a',
                second: 'b',
                expected: 0
            },
            {
                first: '',
                second: '',
                expected: 1
            },
            {
                first: 'a',
                second: '',
                expected: 0
            },
            {
                first: '',
                second: 'a',
                expected: 0
            },
            {
                first: 'apple event',
                second: 'apple    event',
                expected: 1
            },
            {
                first: 'ab',
                second: 'ba',
                expected: 0.5
            }
        ]
        testData.forEach(td => {
            it(`should be ${td.expected}`, () => {
                assert.equal(lcs.similarity(td.first, td.second), td.expected)
            })
        })
    })
    describe('sortMatch()', () => {

    })
    describe('lcsLength()', () => {
        const testData = [{
                first: 'french',
                second: 'quebec',
                expected: 2
            },
            {
                first: 'france',
                second: 'france',
                expected: 6
            },
            {
                first: 'healed',
                second: 'sealed',
                expected: 5
            },
            {
                first: 'web applications',
                second: 'applications of the web',
                expected: 12
            },
            {
                first: 'a',
                second: 'a',
                expected: 1
            },
            {
                first: 'a',
                second: 'b',
                expected: 0
            },
            {
                first: '',
                second: '',
                expected: 0
            },
            {
                first: 'a',
                second: '',
                expected: 0
            },
            {
                first: '',
                second: 'a',
                expected: 0
            },
            {
                first: 'apple event',
                second: 'apple    event',
                expected: 10
            },
            {
                first: 'ab',
                second: 'ba',
                expected: 1
            }
        ]
        testData.forEach(td => {
            it(`should be ${td.expected}`, () => {
                assert.equal(LongestCommonSubsequence.lcsLength(td.first, td.second), td.expected)
            })
        })
    })
})