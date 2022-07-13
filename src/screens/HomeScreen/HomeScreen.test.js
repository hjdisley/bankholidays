import HomeScreen from "./HomeScreen";
import { fireEvent, render } from "@testing-library/react-native";

const navigate = jest.fn();

describe("HomeScreen", () => {
  it("renders with correct elements", () => {
    const { getAllByText } = render(<HomeScreen />);

    expect(getAllByText("HomeScreen")).toBeTruthy();
    expect(getAllByText("Edit")).toBeTruthy();
  });

  it("has an edit button", () => {
    const { getByTestId } = render(<HomeScreen />);
    expect(getByTestId("button")).toBeTruthy();
  });

  it("navigates to edit screen", () => {
    const navigate = jest.fn();
    const { getByText } = render(<HomeScreen navigation={{ navigate }} />);

    fireEvent.press(getByText("Edit"));

    expect(navigate).toHaveBeenCalledWith("Edit");
  });
});
