const app = require('./app');

describe('Counting Duplicates', () => {

	test('should 1 return 1', () => {
		expect(app.countingDuplicates(1)).toBe(1);
	});

});
