import { userEvent,within } from '@storybook/testing-library';
import {expect} from '@storybook/jest';

export const testCase = {
  background:"radial-gradient(circle at 50% 50%, #667eea, #3d235a)",
  navLinksColors:'#F5CDA7',
  navActions:[
    {
      label:'logout',
      onClick:()=>{console.log('asd')}
    }
  ],
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
}

export const testDesktop = async(canvasElement:HTMLElement) => {
  const canvas = within(canvasElement);
  //should render the component with te background color prop and logo
  const headerElement = canvas.getByTitle("navbar");
  await expect(headerElement).toHaveStyle({
    backgroundImage:testCase.background,
  });
  const logoElement = canvas.getByTestId('logo');
  await expect(logoElement.children).toHaveLength(1);
  //should have links with the color prop
  const linkElement = canvas.getByRole("link", {
    name: testCase.navLinks[0].label,
  });
  await expect(linkElement).toHaveStyle({
    color: testCase.navLinksColors,
  });
}

export const testMobile = async(canvasElement:HTMLElement) => {
  const canvas = within(canvasElement);
  //should render the component with te background color prop and logo
  const headerElement = canvas.getByTitle("navbar");
  await expect(headerElement).toHaveStyle({
    backgroundImage:testCase.background,
  });
  const logoElement = canvas.getByTestId('logo');
  await expect(logoElement.children).toHaveLength(1);
  //should have links with the color prop
  const linkElement = canvas.getByRole("link", {
    name: testCase.navLinks[0].label,
  });
  await expect(linkElement).toHaveStyle({
    color: testCase.navLinksColors,
  });
  //renders correctly on mobiles screens
  const menuElement = canvas.getByTestId('menu-icon');
  const closeElement = canvas.getByTestId('close-icon');
  await expect(closeElement).toHaveStyle({display:'none'});
  await userEvent.click(menuElement);
  await expect(menuElement).toHaveStyle({display:'none'})
  await expect(closeElement).toHaveStyle({display:'block'})
}