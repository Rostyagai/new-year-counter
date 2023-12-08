const daysText = document.querySelector(".days-count");

const currentDateUnix = Date.now();
const currentDateString = new Date(Number(currentDateUnix)).toLocaleDateString("en-US");
const currentDate = new Date(currentDateString);

const newYearDate = new Date('01/01/2024');

const timeDifference = newYearDate.getTime() - currentDate.getTime();
const timeDifferenceInDays = Math.round(timeDifference / (1000 * 3600 * 24));

daysText.textContent = timeDifferenceInDays;
