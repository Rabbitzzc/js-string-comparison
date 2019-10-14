const assert = require('assert')
const JaccardIndex = require('../src/main/packages/JaccardIndex')
const jaccard = new JaccardIndex()

describe('test JaccardIndex', () => {
    describe('compareTwoStrings()', () => {
        let compareTwoStrings = jaccard.compareTwoStrings

        const testData = [{
                first: 'french',
                second: 'quebec',
                expected:  0.2222222222222222
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
                expected: 0.6666666666666666
            },
            {
                first: 'web applications',
                second: 'applications of the web',
                expected: 0.8571428571428571
            },
            {
                first: 'this will have a typo somewhere',
                second: 'this will huve a typo somewhere',
                expected: 0.9333333333333333
            },
            {
                first: 'Olive-green table for sale, in extremely good condition.',
                second: 'For sale: table in very good  condition, olive green in colour.',
                expected: 0.782608695652174
            },
            {
                first: 'Olive-green table for sale, in extremely good condition.',
                second: 'For sale: green Subaru Impreza, 210,000 miles',
                expected: 0.4642857142857143
            },
            {
                first: 'Olive-green table for sale, in extremely good condition.',
                second: 'Wanted: mountain bike with at least 21 gears.',
                expected: 0.5
            },
            {
                first: 'this has one extra word',
                second: 'this has one word',
                expected: 0.9166666666666666
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
                expected: 0.8571428571428571
            },
            {
                first: 'ab',
                second: 'ba',
                expected: 1
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
})