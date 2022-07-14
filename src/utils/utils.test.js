import { dateWithinSixMonths, extractBankHolidays } from "./utils";
import testData from "./testData";

describe("extractBankHolidays", () => {
  it("should return an object", () => {
    const bankHolidays = extractBankHolidays(testData);
    expect(typeof bankHolidays).toEqual("object");
  });

  it("should return an object with the keys of each division", () => {
    const bankHolidays = extractBankHolidays(testData);

    expect(Object.keys(bankHolidays)).toEqual([
      "england-and-wales",
      "scotland",
      "northern-ireland",
    ]);
  });

  it("Each division should not have a length greater than 5", () => {
    const bankHolidays = extractBankHolidays(testData);

    for (const division in bankHolidays) {
      expect(bankHolidays[division].length).toBeLessThanOrEqual(5);
    }
  });
});

describe("dateWithinSixMonths", () => {
  it("returns true if date is within six months", () => {
    const date = "2022-10-10";
    const result = dateWithinSixMonths(date);
    expect(result).toBe(true);
  });

  it("returns false if date is not within six months behind", () => {
    const date = "2020-01-01";
    const result = dateWithinSixMonths(date);
    expect(result).toBe(false);
  });

  it("returns false if date is not within six months ahead", () => {
    const date = "2025-01-01";
    const result = dateWithinSixMonths(date);
    expect(result).toBe(false);
  });
});
