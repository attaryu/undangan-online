const target = new Date("Nov 25, 2022 09:00:00").getTime();
const timeElement = {
	days: document.querySelector("#days"),
	hours: document.querySelector("#hours"),
	minutes: document.querySelector("#minutes"),
};

const interval = setInterval(() => {
	const now = new Date().getTime();
	const distance = target - now;

	const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

	timeElement.days.innerHTML = days;
	timeElement.hours.innerHTML = hours;
	timeElement.minutes.innerHTML = minutes;

	if (distance < 0) {
		clearInterval(interval);

		timeElement.days.innerHTML = "0";
		timeElement.hours.innerHTML = "0";
		timeElement.minutes.innerHTML = "0";
	}
}, 500);
