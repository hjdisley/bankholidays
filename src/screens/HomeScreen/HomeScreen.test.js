import HomeScreen from "./HomeScreen";
import { fireEvent, render, act } from "@testing-library/react-native";
import { NativeBaseProvider } from "native-base";

describe("HomeScreen", () => {
  it("renders with correct elements", () => {
    const { queryAllByText, queryAllByTestId } = render(
      <NativeBaseProvider>
        <HomeScreen />
      </NativeBaseProvider>
    );

    expect(queryAllByTestId("DivisionDropdown")).toBeTruthy();
    expect(queryAllByText("Bank Holidays")).toBeTruthy();
    expect(queryAllByText("England And Wales")).toBeTruthy();
  });
});
