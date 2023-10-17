/// <reference types="react" />
import "./navbar.css";
export interface NavLink {
    toUrl: string;
    label: string;
}
export interface Props {
    logo: JSX.Element;
    navLinks: NavLink[];
    background: string;
    linksColor: string;
}
export declare function Navbar({ logo, navLinks, background, linksColor }: Props): JSX.Element;
export default Navbar;
