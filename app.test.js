const app = require('./app');

describe('Counting Duplicates', () => {
	it('should abcde return 0', () => {
		expected = 0;
		received = 'abcde';
		expect(app.countingDuplicates(received)).toEqual(expected);
	});

	it('should aabbcde return 2', () => {
		expected = 2;
		received = 'aabbcde';
		expect(app.countingDuplicates(received)).toBe(expected);
	});

	it('should aabBcde return 2', () => {
		expected = 2;
		received = 'aabBcde';
		expect(app.countingDuplicates(received)).toBe(expected);
	});

	it('should indivisibility return 1', () => {
		expected = 1;
		received = 'indivisibility';
		expect(app.countingDuplicates(received)).toBe(expected);
	});

	it('should indivisibilities return 2', () => {
		expected = 2;
		received = 'indivisibilities';
		expect(app.countingDuplicates(received)).toBe(expected);
	});

	it('should indivisibilities return 2', () => {
		expected = 2;
		received = 'indivisibilities';
		expect(app.countingDuplicates(received)).toBe(expected);
	});

	it('should aA11 return 2', () => {
		expected = 2;
		received = 'aA11';
		expect(app.countingDuplicates(received)).toBe(expected);
	});

	it('should ABBA return 2', () => {
		expected = 2;
		received = 'ABBA';
		expect(app.countingDuplicates(received)).toBe(expected);
	});
});
