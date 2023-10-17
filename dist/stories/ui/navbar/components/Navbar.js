import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CloseIcon from "./icons/CloseIcon";
import MenuIcon from "./icons/MenuIcon";
import "./navbar.css";
import { NavWrapper } from "./styled-components/NavWrapper";
export function Navbar({ logo, navLinks, background, linksColor }) {
    return (_jsxs("header", { className: "header", title: "navbar", style: {
            background: background,
        }, children: [_jsx("a", { href: "#", className: "logo", role: "link", title: "logo", "data-testid": "logo", children: logo }), _jsx("input", { type: "checkbox", id: "check", "data-testid": "checkbox" }), _jsxs("label", { style: { color: "red" }, htmlFor: "check", className: "icons", "data-testid": "icons", role: "label", title: "label icons", children: [_jsx(MenuIcon, { className: "menu-icon" }), _jsx(CloseIcon, { className: "close-icon" })] }), _jsx(NavWrapper, { className: "navbar", "aria-label": "Primary", defaultValue: "blue", "$background": background, children: navLinks.map(({ toUrl, label }) => (_jsx("a", { href: toUrl, title: label, style: { color: linksColor }, children: label }, `navbar-${label}`))) })] }));
}
export default Navbar;
