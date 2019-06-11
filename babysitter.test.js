const { hoursCheck, leaveBeforeStart } = require('./babysitter');

describe('Checking to make sure times are valid.  Need to be between 5pm and 4am, also leave time cannot be before start time', () => {
	it('should return false with the start time being to early,', () => {
		expect(hoursCheck(4, 10)).toBe(false);
	});

	it('should return false with leave time being to early', () => {
		expect(hoursCheck(9, 5)).toBe(false);
	});

	it('should return true with leave time and start time being valid', () => {
		expect(hoursCheck(9, 2)).toBe(true);
	});

	it('should return false with a leave time of 10 and start time of 3', () => {
		expect(leaveBeforeStart(3, 10)).toBe(false);
	});

	it('should return true with a start time of 10 and leave time of 3', () => {
		expect(leaveBeforeStart(10, 3)).toBe(true);
	});
});
