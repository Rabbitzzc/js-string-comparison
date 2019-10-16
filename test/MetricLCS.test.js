const assert = require('assert')
const MetricLCS = require('../src/main/packages/MetricLCS')
const metricLCS = new MetricLCS()

describe('test MetricLCS', () => {
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
                expected: 0.6
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
                assert.equal(metricLCS.similarity(td.first, td.second), td.expected)
            })
        })
    })
    describe('sortMatch()', () => {

    })
})