// No earlier than 5pm no later than 4am.  Must work minimum of 1 full hour, no partials
hours = [5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4];

// Check hours to make sure they are within range, and times are entered correctly
const hoursCheck = (start, leave) => {
	const startTime = hours.slice(0, 10).includes(start);
	const leaveTime = hours.slice(1, 11).includes(leave);

	return startTime && leaveTime ? true : false;
};

module.exports = {
	hoursCheck
};
