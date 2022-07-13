import { renderHook } from "@testing-library/react-hooks";
import useFetchData from "./useFetchData";

describe("useFetchData", () => {
  it("returns data when passed a valid url", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchData("https://www.gov.uk/bank-holidays.json")
    );

    await waitForNextUpdate();

    expect(result.current.data).toBeTruthy();
    expect(typeof result.current.data).toBe("object");
  });

  it("returns error when passed an invalid url", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchData("https://thisisaninvalidurl.com")
    );

    expect(result.current.error).toBeFalsy();

    await waitForNextUpdate();

    expect(result.current.error).toBeTruthy();
  });
});
