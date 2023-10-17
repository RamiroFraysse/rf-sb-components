import Label from "./Label";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const testCase = {
  label: "myLabel",
  size: "h1",
};

describe("Label component", () => {
  let label: HTMLElement;
  beforeEach(() => {
    render(<Label label={testCase.label} size={"h1"} />);
    label = screen.getByText(testCase.label);
  });
  it("should render label text and size correctly", () => {
    expect(label).toBeInTheDocument();
    console.log(label.style);
    expect(label).toHaveClass("h1");
  });
});
