import moment from "moment";

export const extractBankHolidays = (data) => {
  const divisions = Object.keys(data);
  const nextFiveBankHolidays = {};

  divisions.forEach((division) => {
    const holidays = data[division].events;

    const formattedHolidays = holidays
      .filter((holiday) => {
        return dateWithinSixMonths(holiday.date);
      })
      .slice(0, 5);
    nextFiveBankHolidays[division] = formattedHolidays;
  });

  return nextFiveBankHolidays;
};

export const dateWithinSixMonths = (date) => {
  const today = moment();
  const sixMonthsFromNow = moment().add(6, "months");

  return moment(date).isBetween(today, sixMonthsFromNow);
};
