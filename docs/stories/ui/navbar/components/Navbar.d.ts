/// <reference types="react" />
import "./navbar.css";
export interface NavLink {
    toUrl: string;
    label: string;
}
export interface NavAction {
    label: string;
    onClick: () => void;
}
export interface Props {
    logo: JSX.Element;
    navLinks?: NavLink[];
    navActions?: NavAction[];
    background: string;
    stylesNav?: React.CSSProperties;
    stylesLinks?: React.CSSProperties;
    stylesActions?: React.CSSProperties;
}
export declare function Navbar({ logo, navLinks, navActions, stylesActions, stylesNav, background, stylesLinks, }: Props): JSX.Element;
export default Navbar;
