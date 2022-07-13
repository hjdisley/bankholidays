import CountryDropdown from "./CountryDropdown";
import { render } from "@testing-library/react-native";

describe("CountryDropdown Component", () => {
  it("renders a dropdown menu", () => {
    const { getAllByText } = render(<CountryDropdown />);
    expect(getAllByText("CountryDropdown")).toBeTruthy();
  });
});
