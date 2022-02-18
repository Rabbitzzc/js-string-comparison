const assert = require('assert');
import Cosine from '../src/core/packages/Cosine';
const cosine = new Cosine();

describe('test Cosine Similarity', () => {
	describe('similarity()', () => {
		const testData = [
			{
				first: 'french',
				second: 'quebec',
				expected: 0.3651483716701107,
			},
			{
				first: 'france',
				second: 'france',
				expected: 1,
			},
			{
				first: 'healed',
				second: 'sealed',
				expected: 0.7999999999999998,
			},
			{
				first: 'web applications',
				second: 'applications of the web',
				expected: 0.9258200997725515,
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
				expected: 0.9999999999999998,
			},
		];
		testData.forEach((td) => {
			it(`should be ${td.expected}`, () => {
				assert.equal(cosine.similarity(td.first, td.second), td.expected);
			});
		});
	});
	describe('sortMatch()', () => {});
});
