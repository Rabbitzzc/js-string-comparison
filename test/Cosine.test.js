const assert = require('assert')
const Cosine = require('../src/main/packages/Cosine')
const cosine = new Cosine()

describe('test Cosine Similarity', () => {
    describe('compareTwoStrings()', () => {
        let compareTwoStrings = cosine.compareTwoStrings

        const testData = [{
                first: 'french',
                second: 'quebec',
                expected: 0.3651483716701107
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
                expected: 0.7999999999999998
            },
            {
                first: 'web applications',
                second: 'applications of the web',
                expected: 0.9258200997725515
            },
            {
                first: 'this will have a typo somewhere',
                second: 'this will huve a typo somewhere',
                expected: 0.9660917830792959
            },
            {
                first: 'Olive-green table for sale, in extremely good condition.',
                second: 'For sale: table in very good  condition, olive green in colour.',
                expected: 0.8783100656536799
            },
            {
                first: 'Olive-green table for sale, in extremely good condition.',
                second: 'For sale: green Subaru Impreza, 210,000 miles',
                expected: 0.6343350474165466
            },
            {
                first: 'Olive-green table for sale, in extremely good condition.',
                second: 'Wanted: mountain bike with at least 21 gears.',
                expected: 0.6666666666666666
            },
            {
                first: 'this has one extra word',
                second: 'this has one word',
                expected: 0.9574271077563381
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
                expected: 0.9258200997725514
            },
            {
                first: 'ab',
                second: 'ba',
                expected: 0.9999999999999998
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