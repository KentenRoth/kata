// No earlier than 5pm no later than 4am.  Must work minimum of 1 full hour, no partials
hours = [5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4];

// Check hours to make sure they are within range, and times are entered correctly
const hoursCheck = (start, leave) =>
	hours.slice(0, 10).includes(start) && hours.slice(1, 11).includes(leave)
		? true
		: false;

// Checking to make sure leave time is not before start time
const leaveBeforeStart = (start, leave) =>
	hours.indexOf(start) <= hours.indexOf(leave) - 1 ? true : false;

// Checking to make sure both hoursCheck and leaveBeforeStart are true.
const workableHours = (start, leave) =>
	hoursCheck(start, leave) && leaveBeforeStart(start, leave) ? true : false;

const nightlyPayment = (family, start, leave) => {
	const startTime = hours.indexOf(start);
	const leaveTime = hours.slice(0, hours.indexOf(leave));
	payment = 0;

	if (workableHours(start, leave) !== true) {
		return 'Please check the hours entered';
	}

	switch (family) {
		case 'familyA':
			return familyA(startTime, leaveTime);
		case 'familyB':
			return familyB(startTime, leaveTime);
		case 'familyC':
			return familyC(startTime, leaveTime);
		default:
			return 'Please check family name';
	}
};

// Family A - $15 hourly before 11pm, $20 hourly rest of night
const familyA = (start, leave) => {
	for (i = start; leave.length > i; i++) {
		i <= 5 ? (payment += 15) : (payment += 20);
	}
	return payment;
};

// Family B - $12 hourly before 10pm, $8 hourly between 10 - 12, $16 hourly after 12
const familyB = (start, leave) => {
	for (i = start; leave.length > i; i++) {
		i <= 4 ? (payment += 12) : i <= 6 ? (payment += 8) : (payment += 16);
	}
	return payment;
};

// Family C - $21 hourly before 9pm, $15 hourly after
const familyC = (start, leave) => {
	for (i = start; leave.length > i; i++) {
		i <= 3 ? (payment += 21) : (payment += 15);
	}
	return payment;
};

module.exports = {
	hoursCheck,
	leaveBeforeStart,
	workableHours,
	nightlyPayment
};
