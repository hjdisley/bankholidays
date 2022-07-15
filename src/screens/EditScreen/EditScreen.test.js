import EditScreen from "./EditScreen";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { NativeBaseProvider } from "native-base";
import insets from "../../inset";
import { NavigationContainer } from "@react-navigation/native";

const mockRoute = {
  params: {
    setBunting: jest.fn(),
    setNotes: jest.fn(),
    holiday: {
      title: "New Year’s Day",
      date: "2017-01-02",
      notes: "Substitute day",
      bunting: true,
    },
    data: [
      {
        title: "New Year’s Day",
        date: "2017-01-02",
        notes: "Substitute day",
        bunting: true,
      },
      {
        title: "Good Friday",
        date: "2017-04-14",
        notes: "",
        bunting: false,
      },
      {
        title: "Easter Monday",
        date: "2017-04-17",
        notes: "",
        bunting: true,
      },
      {
        title: "Early May bank holiday",
        date: "2017-05-01",
        notes: "",
        bunting: true,
      },
      {
        title: "Spring bank holiday",
        date: "2017-05-29",
        notes: "",
        bunting: true,
      },
    ],
  },
};

const mockNavigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
};

describe("EditScreen", () => {
  // test it renders with correct elements
  it("renders with correct elements", () => {
    const { getByTestId, getByText } = render(
      <NativeBaseProvider initialWindowMetrics={insets}>
        <NavigationContainer>
          <EditScreen route={mockRoute} />
        </NavigationContainer>
      </NativeBaseProvider>
    );

    expect(getByText("New Year’s Day")).toBeTruthy();
    expect(getByTestId("saveButton")).toBeTruthy();
    expect(getByTestId("textArea")).toBeTruthy();
  });
  // test state updates when changed
  it("state updates when text in text area changed", () => {
    const { getByTestId } = render(
      <NativeBaseProvider initialWindowMetrics={insets}>
        <NavigationContainer>
          <EditScreen route={mockRoute} />
        </NavigationContainer>
      </NativeBaseProvider>
    );

    const textArea = getByTestId("textArea");
    expect(textArea.props.value).toBe("Substitute day");

    fireEvent.changeText(textArea, "New notes");

    expect(textArea.props.value).toBe("New notes");
  });

  // test navigates back when save pressed
  it("navigates back when save pressed", () => {
    const { getByTestId } = render(
      <NativeBaseProvider initialWindowMetrics={insets}>
        <NavigationContainer>
          <EditScreen navigation={mockNavigation} route={mockRoute} />
        </NavigationContainer>
      </NativeBaseProvider>
    );

    const saveButton = getByTestId("saveButton");
    fireEvent.press(saveButton);

    waitFor(() => expect(mockNavigation.goBack).toHaveBeenCalled());
  });
});
