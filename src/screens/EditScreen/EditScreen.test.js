import EditScreen from "./EditScreen";
import renderer from "react-test-renderer";

describe("EditScreen", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<EditScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders text", () => {
    const tree = renderer.create(<EditScreen />);
    const text = tree.root.findByType("Text");
    expect(text.props.children).toContain("EditScreen");
  });
});
