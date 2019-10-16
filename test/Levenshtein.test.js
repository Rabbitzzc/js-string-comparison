const assert = require('assert')
const Levenshtein = require('../src/main/packages/Levenshtein')
const levenshtein = new Levenshtein()

describe('test Levenshtein', () => {
    describe('similarity()', () => {
        const testData = [{
                first: 'french',
                second: 'quebec',
                expected:  0.16666666666666663
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
                expected: 0.44999999999999996
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
                expected: 0
            }
        ]
        testData.forEach(td => {
            it(`should be ${td.expected}`, () => {
                assert.equal(levenshtein.similarity(td.first, td.second), td.expected)
            })
        })
    })
    describe('sortMatch()', () => {

    })
})