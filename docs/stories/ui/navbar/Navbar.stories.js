import Navbar from './components/Navbar';
import Logo from './assets/Logo';
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import { testCase, testDesktop, testMobile } from './tests/testCases';
const meta = {
    title: 'ui/Navbar',
    component: Navbar,
};
export const MobileView = {
    play: async ({ canvasElement }) => {
        testMobile(canvasElement);
    },
    args: {
        logo: Logo({ width: "100", height: "50" }),
        navLinks: testCase.navLinks,
        background: testCase.background,
        stylesLinks: { color: testCase.navLinksColors }
    },
    parameters: {
        viewport: {
            viewports: MINIMAL_VIEWPORTS,
            defaultViewport: "mobile2"
        }
    }
};
export const DesktopView = {
    play: async ({ canvasElement }) => {
        testDesktop(canvasElement);
    },
    args: {
        logo: Logo({ width: "100", height: "50" }),
        navLinks: testCase.navLinks,
        navActions: testCase.navActions,
        background: testCase.background,
        stylesLinks: { color: testCase.navLinksColors },
    },
};
export default meta;
