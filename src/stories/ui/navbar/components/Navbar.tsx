import CloseIcon from "./icons/CloseIcon";
import MenuIcon from "./icons/MenuIcon";
import "./navbar.css";
import { NavWrapper } from "./styled-components/NavWrapper";

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

export function Navbar({
  logo,
  navLinks,
  navActions,
  stylesActions,
  stylesNav,
  background,
  stylesLinks,
}: Props) {
  return (
    <header
      className="header"
      title="navbar"
      style={{
        background: background,
        ...stylesNav,
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
        {navLinks && (
          <div>
            {navLinks.map(({ toUrl, label }) => (
              <a
                href={toUrl}
                key={`navbar-${label}`}
                title={label}
                style={{ ...stylesLinks }}
              >
                {label}
              </a>
            ))}
          </div>
        )}
        {navActions && (
          <div>
            {navActions.map(({ label, onClick }) => (
              <button
                key={`navbar-action-${label}`}
                title={label}
                onClick={onClick}
                style={{ ...stylesActions }}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </NavWrapper>
    </header>
  );
}

export default Navbar;
