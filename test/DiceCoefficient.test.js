const assert = require('assert')
const DiceCoefficient = require('../src/main/packages/DiceCoefficient')
const dice = new DiceCoefficient()

describe('test DiceCoefficient', () => {
    describe('similarity()', () => {
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
                assert.equal(dice.similarity(td.first, td.second), td.expected)
            })
        })
    })
    describe('sortMatch()', () => {

    })
})