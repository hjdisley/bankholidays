import BankHolidayCard from "./BankHolidayCard";
import { render, fireEvent } from "@testing-library/react-native";
import { NativeBaseProvider } from "native-base";
import insets from "../../inset";

const testBankHoliday = {
  holiday: {
    title: "New Year’s Day",
    date: "2017-01-02",
    notes: "Substitute day",
    bunting: true,
  },
};

describe("BankHolidayCard", () => {
  it("renders correctly", () => {
    const component = render(
      <NativeBaseProvider>
        <BankHolidayCard />
      </NativeBaseProvider>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
