import HomeScreen from "./HomeScreen";
import { fireEvent, render, cleanup, act } from "@testing-library/react-native";
import { NativeBaseProvider } from "native-base";

afterEach(cleanup);

describe("HomeScreen", () => {
  it("renders with correct elements", () => {
    const { getAllByText } = render(
      <NativeBaseProvider>
        <HomeScreen />
      </NativeBaseProvider>
    );

    expect(getAllByText("Bank Holidays")).toBeTruthy();
    expect(getAllByText("CountryDropdown")).toBeTruthy();
  });

  it("has an edit button", () => {
    const { getByTestId } = render(
      <NativeBaseProvider>
        <HomeScreen />
      </NativeBaseProvider>
    );
    expect(getByTestId("button")).toBeTruthy();
  });

  it("navigates to edit screen", () => {
    const navigate = jest.fn();
    const promise = Promise.resolve();
    const { getByText } = render(
      <NativeBaseProvider>
        <HomeScreen navigation={{ navigate }} />
      </NativeBaseProvider>
    );

    fireEvent.press(getByText("Edit"));

    expect(navigate).toHaveBeenCalledWith("Edit");
    act(() => promise);
  });
});
