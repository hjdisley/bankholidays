import Header from "./Header";
import { render } from "@testing-library/react-native";

describe("Header Component", () => {
  it("renders with correct elements", () => {
    const { getAllByText } = render(<Header />);

    expect(getAllByText("Bank Holidays")).toBeTruthy();
  });
});
