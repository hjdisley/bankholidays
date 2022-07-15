import DivisionDropdown from "./DivisionDropdown";
import { render } from "@testing-library/react-native";
import { testDivisions } from "../../mockData";
import { NativeBaseProvider } from "native-base";

describe("DivisionDropdown Component", () => {
  it("renders correctly", () => {
    const component = render(
      <NativeBaseProvider>
        <DivisionDropdown divisions={testDivisions} />
      </NativeBaseProvider>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
