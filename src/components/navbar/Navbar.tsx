import CloseIcon from "./icons/CloseIcon";
import MenuIcon from "./icons/MenuIcon";
import "./navbar.css";
import { NavWrapper } from "./styled-components/NavWrapper";

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

export default function Navbar({
  logo,
  navLinks,
  background,
  linksColor,
}: Props) {
  return (
    <header
      className="header"
      title="navbar"
      style={{
        background: background,
      }}
    >
      <a href="#" className="logo" role="link" title="logo" data-testid="logo">
        {logo}
      </a>
      <input type="checkbox" id="check" data-testid="checkbox" />
      <label
        style={{ color: "red" }}
        htmlFor="check"
        className="icons"
        data-testid="icons"
        role="label"
        title="label icons"
      >
        <MenuIcon className="menu-icon" />
        <CloseIcon className="close-icon" />
      </label>
      <NavWrapper
        className="navbar"
        aria-label="Primary"
        defaultValue="blue"
        $background={background}
      >
        {navLinks.map(({ toUrl, label }) => (
          <a
            href={toUrl}
            key={`navbar-${label}`}
            title={label}
            style={{ color: linksColor }}
          >
            {label}
          </a>
        ))}
      </NavWrapper>
    </header>
  );
}
