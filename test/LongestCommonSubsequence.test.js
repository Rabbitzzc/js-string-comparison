const assert = require('assert')
const LongestCommonSubsequence = require('../src/main/packages/LongestCommonSubsequence')
const lcs = new LongestCommonSubsequence()

describe('test LongestCommonSubsequence', () => {
    describe('compareTwoStrings()', () => {
        let compareTwoStrings = lcs.compareTwoStrings

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
                first: 'fRaNce',
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
                first: 'this will have a typo somewhere',
                second: 'this will huve a typo somewhere',
                expected: 0.9615384615384616
            },
            {
                first: 'Olive-green table for sale, in extremely good condition.',
                second: 'For sale: table in very good  condition, olive green in colour.',
                expected: 0.5346534653465347
            },
            {
                first: 'Olive-green table for sale, in extremely good condition.',
                second: 'For sale: green Subaru Impreza, 210,000 miles',
                expected: 0.3409090909090909
            },
            {
                first: 'Olive-green table for sale, in extremely good condition.',
                second: 'Wanted: mountain bike with at least 21 gears.',
                expected: 0.27586206896551724
            },
            {
                first: 'this has one extra word',
                second: 'this has one word',
                expected: 0.8484848484848485
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
                first: 'iphone',
                second: 'iphone x',
                expected: 0.9230769230769231
            },
            {
                first: 'ab',
                second: 'ba',
                expected: 0.5
            }
        ]
        testData.forEach(td => {
            it(`should be ${td.expected}`, () => {
                assert.equal(compareTwoStrings(td.first, td.second), td.expected)
            })
        })
    })
    describe('findBestMatch()', () => {

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
                first: 'fRaNce',
                second: 'france',
                expected: 4
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
                first: 'this will have a typo somewhere',
                second: 'this will huve a typo somewhere',
                expected: 30
            },
            {
                first: 'Olive-green table for sale, in extremely good condition.',
                second: 'For sale: table in very good  condition, olive green in colour.',
                expected: 32
            },
            {
                first: 'Olive-green table for sale, in extremely good condition.',
                second: 'For sale: green Subaru Impreza, 210,000 miles',
                expected: 17
            },
            {
                first: 'Olive-green table for sale, in extremely good condition.',
                second: 'Wanted: mountain bike with at least 21 gears.',
                expected: 16
            },
            {
                first: 'this has one extra word',
                second: 'this has one word',
                expected: 17
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
                expected: 11
            },
            {
                first: 'iphone',
                second: 'iphone x',
                expected: 6
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