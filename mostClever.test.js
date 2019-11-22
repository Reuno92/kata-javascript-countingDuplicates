const app = require('./mostClever');

describe('Counting Duplicates', () => {
	it('should abcde return 0', () => {
		expected = 0;
		received = 'abcde';
		expect(app.shortest(received)).toEqual(expected);
		expect(app.longest(received)).toEqual(expected);
		expect(app.normal(received)).toEqual(expected);
		expect(app.regEx(received)).toEqual(expected);
	});

	it('should aabbcde return 2', () => {
		expected = 2;
		received = 'aabbcde';
		expect(app.shortest(received)).toEqual(expected);
		expect(app.longest(received)).toEqual(expected);
		expect(app.normal(received)).toEqual(expected);
		expect(app.regEx(received)).toEqual(expected);
	});

	it('should aabBcde return 2', () => {
		expected = 2;
		received = 'aabBcde';
		expect(app.shortest(received)).toEqual(expected);
		expect(app.longest(received)).toEqual(expected);
		expect(app.normal(received)).toEqual(expected);
		expect(app.regEx(received)).toEqual(expected);
	});

	it('should indivisibility return 1', () => {
		expected = 1;
		received = 'indivisibility';
		expect(app.shortest(received)).toEqual(expected);
		expect(app.longest(received)).toEqual(expected);
		expect(app.normal(received)).toEqual(expected);
		expect(app.regEx(received)).toEqual(expected);
	});

	it('should indivisibilities return 2', () => {
		expected = 2;
		received = 'indivisibilities';
		expect(app.shortest(received)).toEqual(expected);
		expect(app.longest(received)).toEqual(expected);
		expect(app.normal(received)).toEqual(expected);
		expect(app.regEx(received)).toEqual(expected);
	});

	it('should indivisibilities return 2', () => {
		expected = 2;
		received = 'indivisibilities';
		expect(app.shortest(received)).toEqual(expected);
		expect(app.longest(received)).toEqual(expected);
		expect(app.normal(received)).toEqual(expected);
		expect(app.regEx(received)).toEqual(expected);
	});

	it('should aA11 return 2', () => {
		expected = 2;
		received = 'aA11';
		expect(app.shortest(received)).toEqual(expected);
		expect(app.longest(received)).toEqual(expected);
		expect(app.normal(received)).toEqual(expected);
		expect(app.regEx(received)).toEqual(expected);
	});

	it('should ABBA return 2', () => {
		expected = 2;
		received = 'ABBA';
		expect(app.shortest(received)).toEqual(expected);
		expect(app.longest(received)).toEqual(expected);
		expect(app.normal(received)).toEqual(expected);
		expect(app.regEx(received)).toEqual(expected);
	});
});
