const app = require('./app');

describe('Counting Duplicates', () => {
	it('should abcde return nothing', () => {
		expected = 0;
		expect(app.countingDuplicates('abcde')).toEqual(expected);
	});

	it('should aabbcde return 2', () => {
		expected = 2;
		expect(app.countingDuplicates('aabbcde')).toBe(expected);
	});

	it('should aabBcde return nothing', () => {
		expected = 2;
		expect(app.countingDuplicates('aabBcde')).toBe(expected);
	});
});
