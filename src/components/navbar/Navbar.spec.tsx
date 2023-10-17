/* eslint-disable @typescript-eslint/no-empty-function */
import Navbar from "./Navbar";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import mediaQuery from "css-mediaquery";

function createMatchMedia(width: number) {
  return (query: string) => {
    return {
      matches: mediaQuery.match(query, { width }),
      media: "",
      addListener: () => {},
      removeListener: () => {},
      onchange: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => true,
    };
  };
}

function resizeScreenSize(width: number) {
  window.matchMedia = createMatchMedia(width);
}

const testCase = {
  logo: <div>logo</div>,
  navLinks: [
    {
      label: "Home",
      toUrl: "",
    },
    {
      label: "About",
      toUrl: "",
    },
    {
      label: "Gallery",
      toUrl: "",
    },
    {
      label: "Services",
      toUrl: "",
    },
    {
      label: "Contact",
      toUrl: "",
    },
  ],
  background: "black",
  linksColors: "white",
};

describe("Navbar component", () => {
  beforeEach(() => {
    render(
      <Navbar
        logo={testCase.logo}
        navLinks={testCase.navLinks}
        background={testCase.background}
        linksColor={testCase.linksColors}
      />
    );
  });
  it("should render the component with te background color prop and logo", () => {
    const headerElement = screen.getByTitle("navbar");
    expect(headerElement).toHaveStyle({
      background: testCase.background,
    });
    const logoElement = screen.getByRole("link", {
      name: "logo",
    });
    expect(logoElement.children).toHaveLength(1);
  });
  it("should have links with the color prop", () => {
    const linkElement = screen.getByRole("link", {
      name: testCase.navLinks[0].label,
    });
    expect(linkElement).toHaveStyle({
      color: testCase.linksColors,
    });
  });
  it("renders correctly on mobiles screens", () => {
    // Set the screen size to a smaller value
    const icons = screen.getByTestId("icons");

    expect(getComputedStyle(icons).display).toBe("none");
    resizeScreenSize(768);
    console.log(window.innerWidth);

    expect(getComputedStyle(icons).display).toBe("inline-flex");
    const menuIcon = screen.getByTestId("menu-icon");
    const closeIcon = screen.getByTestId("close-icon");
    expect(menuIcon).toHaveStyle({ display: "block" });
    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
    expect(checkbox.checked).toEqual(false);
    fireEvent.click(checkbox);
    expect(closeIcon).toHaveStyle({ display: "block" });
    expect(checkbox.checked).toEqual(true);
  });
});
