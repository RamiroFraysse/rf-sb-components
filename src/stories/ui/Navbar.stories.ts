import { within,userEvent } from '@storybook/testing-library';
import {expect} from '@storybook/jest'
import { Meta, StoryObj } from '@storybook/react';
import Navbar from '../../components/navbar/Navbar';
import Logo from '../../components/navbar/Logo';
import {MINIMAL_VIEWPORTS} from "@storybook/addon-viewport"


const meta: Meta<typeof Navbar> = {
  title: 'ui/Navbar',
  component: Navbar,
}

type Story = StoryObj<typeof Navbar>


const testCaseRadialGradient = {
  background:"radial-gradient(circle at 50% 50%, #667eea, #3d235a)",
  navLinksColors:'#F5CDA7',
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
export const MobileView:Story = {
  play: async ({canvasElement}) => {
      const canvas = within(canvasElement);
      //should render the component with te background color prop and logo
      const headerElement = canvas.getByTitle("navbar");
      await expect(headerElement).toHaveStyle({
        backgroundImage:testCaseRadialGradient.background,
      });
      const logoElement = canvas.getByTestId('logo');
      await expect(logoElement.children).toHaveLength(1);
      //should have links with the color prop
      const linkElement = canvas.getByRole("link", {
        name: testCaseRadialGradient.navLinks[0].label,
      });
      await expect(linkElement).toHaveStyle({
        color: testCaseRadialGradient.navLinksColors,
      });
      //renders correctly on mobiles screens
      const menuElement = canvas.getByTestId('menu-icon');
      const closeElement = canvas.getByTestId('close-icon');
      await expect(closeElement).toHaveStyle({display:'none'});
      await userEvent.click(menuElement);
      await expect(menuElement).toHaveStyle({display:'none'})
      await expect(closeElement).toHaveStyle({display:'block'})
  },
  args:{
    logo: Logo({width:"100",height:"50"}),
    navLinks:testCaseRadialGradient.navLinks,
    background: testCaseRadialGradient.background,
    linksColor:testCaseRadialGradient.navLinksColors
  },
  parameters:{
    viewport:{
      viewports:MINIMAL_VIEWPORTS,
      defaultViewport:"mobile2"
    }
  }
}

export const DesktopView:Story = {
  play: async ({canvasElement}) => {
      const canvas = within(canvasElement);
      //should render the component with te background color prop and logo
      const headerElement = canvas.getByTitle("navbar");
      await expect(headerElement).toHaveStyle({
        backgroundImage:testCaseRadialGradient.background,
      });
      const logoElement = canvas.getByTestId('logo');
      await expect(logoElement.children).toHaveLength(1);
      //should have links with the color prop
      const linkElement = canvas.getByRole("link", {
        name: testCaseRadialGradient.navLinks[0].label,
      });
      await expect(linkElement).toHaveStyle({
        color: testCaseRadialGradient.navLinksColors,
      });
  },
  args:{
    logo: Logo({width:"100",height:"50"}),
    navLinks:testCaseRadialGradient.navLinks,
    background: testCaseRadialGradient.background,
    linksColor:testCaseRadialGradient.navLinksColors
  },
}

export default meta;