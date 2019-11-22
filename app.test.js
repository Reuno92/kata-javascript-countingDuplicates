const app = require('./app');

describe('Counting Duplicates', () => {
	it('should abcde return nothing', () => {
		expected = 0;
		received = 'abcde';
		expect(app.countingDuplicates(received)).toEqual(expected);
	});

	it('should aabbcde return 2', () => {
		expected = 2;
		received = 'aabbcde';
		expect(app.countingDuplicates(received)).toBe(expected);
	});

	it('should aabBcde return nothing', () => {
		expected = 2;
		received = 'aabBcde';
		expect(app.countingDuplicates(received)).toBe(expected);
	});

	it('should indivisibility return nothing', () => {
		expected = 1;
		received = 'indivisibility';
		expect(app.countingDuplicates(received)).toBe(expected);
	});

	it('should indivisibilities return nothing', () => {
		expected = 2;
		received = 'indivisibilities';
		expect(app.countingDuplicates(received)).toBe(expected);
	});

	it('should indivisibilities return nothing', () => {
		expected = 2;
		received = 'indivisibilities';
		expect(app.countingDuplicates(received)).toBe(expected);
	});

	it('should aA11 return nothing', () => {
		expected = 2;
		received = 'aA11';
		expect(app.countingDuplicates(received)).toBe(expected);
	});
});
