const { hoursCheck } = require('./babysitter');

describe('Checking to make sure times are valid.  Need to be between 5pm and 4am, also leave time cannot be before start time', () => {
	it('should return false with the start time being to early,', () => {
		expect(hoursCheck(4, 10)).toBe(false);
	});

	it('should return false with leave time being to early', () => {
		expect(hoursCheck(9, 5)).toBe(false);
	});
});
