import EditScreen from "./EditScreen";
import { render } from "@testing-library/react-native";

describe("EditScreen", () => {
  it("renders with correct elements", () => {
    const { getAllByText } = render(<EditScreen />);

    expect(getAllByText("EditScreen")).toBeTruthy();
  });

  it("has edit screen text", () => {
    const { getAllByText } = render(<EditScreen />);
    expect(getAllByText("EditScreen")).toBeTruthy();
  });
});
