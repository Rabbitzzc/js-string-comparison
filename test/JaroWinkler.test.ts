import * as assert from 'assert'
import JaroWinkler from '../src/core/packages/JaroWinkler'
const jaroWinkler = new JaroWinkler()

describe('test JaroWinkler Similarity', () => {
  describe('similarity()', () => {
    const testData = [
      {
        first: 'TRATE',
        second: 'TRACE',
        expected: 0.9066666666666667,
      },
      {
        first: 'DwAyNE',
        second: 'DuANE',
        expected: 0.8400000000000001,
      },
      {
        first: 'a',
        second: 'a',
        expected: 1,
      },
      {
        first: 'a',
        second: 'b',
        expected: 0,
      },
      {
        first: '',
        second: '',
        expected: 1,
      },
      {
        first: 'a',
        second: '',
        expected: 0,
      },
      {
        first: '',
        second: 'a',
        expected: 0,
      },
      {
        first: 'apple event',
        second: 'apple    event',
        expected: 1,
      },
      {
        first: 'ab',
        second: 'ba',
        expected: 0,
      },
    ]
    testData.forEach((td) => {
      it(`should be ${td.expected}`, () => {
        assert.equal(jaroWinkler.similarity(td.first, td.second), td.expected)
      })
    })
  })
  describe('sortMatch()', () => {})
})
