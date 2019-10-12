const assert = require('assert')
const DiceCoefficient = require('../src/main/packages/DiceCoefficient')
const dice = new DiceCoefficient()

describe('test DiceCoefficient', () => {
    describe('compareTwoStrings()', () => {
        let compareTwoStrings = dice.compareTwoStrings

        const testData = [{
                first: 'french',
                second: 'quebec',
                expected: 0
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
                expected: 0.8
            },
            {
                first: 'web applications',
                second: 'applications of the web',
                expected: 0.7878787878787878
            },
            {
                first: 'this will have a typo somewhere',
                second: 'this will huve a typo somewhere',
                expected: 0.92
            },
            {
                first: 'Olive-green table for sale, in extremely good condition.',
                second: 'For sale: table in very good  condition, olive green in colour.',
                expected: 0.6464646464646465
            },
            {
                first: 'Olive-green table for sale, in extremely good condition.',
                second: 'For sale: green Subaru Impreza, 210,000 miles',
                expected: 0.27906976744186046
            },
            {
                first: 'Olive-green table for sale, in extremely good condition.',
                second: 'Wanted: mountain bike with at least 21 gears.',
                expected: 0.1411764705882353
            },
            {
                first: 'this has one extra word',
                second: 'this has one word',
                expected: 0.7741935483870968
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
                expected: 0.9090909090909091
            },
            {
                first: 'ab',
                second: 'ba',
                expected: 0
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