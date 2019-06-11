const {
	hoursCheck,
	leaveBeforeStart,
	workableHours,
	familyA,
	familyB
} = require('./babysitter');

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

	it('should return false with start time being to early, workable hours to late, or start after leave', () => {
		expect(workableHours(4, 12)).toBe(false);
		expect(workableHours(2, 5)).toBe(false);
		expect(workableHours(1, 12)).toBe(false);
	});

	it('should return true with valid working hours', () => {
		expect(workableHours(7, 3)).toBe(true);
	});
});

describe('Checking to see the payment for hours worked for family A', () => {
	it('should return "Please check the hours entered" if the times are not valid', () => {
		expect(familyA(4, 10)).toBe('Please check the hours entered');
		expect(familyA(10, 5)).toBe('Please check the hours entered');
		expect(familyA(3, 12)).toBe('Please check the hours entered');
	});
	it('should return 75 for working 5 to 10 and only working early hours', () => {
		expect(familyA(5, 10)).toBe(75); // 5 hours at $15 an hour = $75
	});

	it('should return 80 for working 11 to 3 and only working late hours', () => {
		expect(familyA(11, 3)).toBe(80); // 4 hours at $20 = $80
	});

	it('should return 120 for working 7 to 2 and working both early and late hours', () => {
		expect(familyA(7, 2)).toBe(120); // 4 early hours = $60 and 3 late hours = $60
	});
});

describe('Checking to see the payment for hours worked for family B', () => {
	it('should return "Please check the hours entered" if the times are not valid', () => {
		expect(familyB(4, 10)).toBe('Please check the hours entered');
		expect(familyB(10, 5)).toBe('Please check the hours entered');
		expect(familyB(3, 12)).toBe('Please check the hours entered');
	});

	it('should return 36 for working 5 to 8 and only early hours', () => {
		expect(familyB(5, 8)).toBe(36); // 3 hours at $12 = $36
	});

	it('should return 16 for working 10 to 11 and only working mid hours', () => {
		expect(familyB(10, 12)).toBe(16); // 2 hours at $8 = $16
	});

	it('should return 48 for working 12 to 3 and only working late hours', () => {
		expect(familyB(12, 3)).toBe(48); // 3 hours at $16 = $48
	});

	it('should return 44 for working 7 to 11 and working only early and mid hours', () => {
		expect(familyB(7, 11)).toBe(44); // 3 hours at $12 = $36 and 1 hour at $8 = $8
	});

	it('should return 56 for working 11 to 3 and working only mid and late hours', () => {
		expect(familyB(11, 3)).toBe(56); // 1 hour at $8 = $8 and 3 hours at $16 = $48
	});

	it('should return 112 for working 6 to 3 and working across all 3 sets of payrates', () => {
		expect(familyB(6, 3)).toBe(112); // 4 hours at $12 = $48, 2 hours at $8 = $16, 3 hours at $16 = $48
	});
});
