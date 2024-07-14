export function unixTimestampToDate(unixTimestamp) {
  const unixTimestampInMilliseconds = 1000 * unixTimestamp;
  const date = new Date(unixTimestampInMilliseconds);

  // Return the Date object directly, which can be used as needed
  return date;
}

export function dateToUnixTimestamp(date) {
  // Create a new Date object based on the provided date
  const dateObject = new Date(date);

  // Get the Unix timestamp in milliseconds
  const unixTimestamp = dateObject.getTime() / 1000;

  // Return the Unix timestamp
  return unixTimestamp;
}

export function getCurrentUnixTimestamp() {
  // Create a new Date object with the current date and time
  const now = new Date();

  // Get the Unix timestamp in milliseconds
  const unixTimestamp = now.getTime();

  // Return the Unix timestamp
  return Math.floor(unixTimestamp / 1000);
}

export function getTimeDifferenceBetweenTimestamps(
  startTimestamp,
  endTimestamp
) {
  const start = Number(startTimestamp);
  const end = Number(endTimestamp);
  // Convert timestamps from seconds to milliseconds
  const startDate = new Date(start * 1000);
  const endDate = new Date(end * 1000);

  // Calculate the difference in milliseconds
  const differenceInMilliseconds = endDate - startDate;

  // Create a new Date object for the difference
  const differenceDate = new Date(differenceInMilliseconds);

  // Extract the date and time components
  const days = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
  const hours = differenceDate.getUTCHours();
  const minutes = differenceDate.getUTCMinutes();
  const seconds = differenceDate.getUTCSeconds();

  // return `${days} d, ${hours} h, ${minutes} m, ${seconds} s`;
  return { days: days, hours: hours, mins: minutes, sec: seconds };
}
