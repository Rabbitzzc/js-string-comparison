const assert = require('assert')
const JaccardIndex = require('../src/main/packages/JaccardIndex')
const jaccard = new JaccardIndex()

describe('test JaccardIndex', () => {
    describe('similarity()', () => {
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
                expected: 1
            }
        ]
        testData.forEach(td => {
            it(`should be ${td.expected}`, () => {
                assert.equal(jaccard.similarity(td.first, td.second), td.expected)
            })
        })
    })
    describe('sortMatch()', () => {

    })
})