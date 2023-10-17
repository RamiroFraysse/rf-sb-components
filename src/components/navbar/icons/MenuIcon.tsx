export interface Props {
  className: string;
}

function MenuIcon({ className }: Props) {
  return (
    <svg
      className={className}
      key="https://icongr.am/fontawesome/bars.svg?size=28&color=F5CDA7"
      height={24}
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      data-testid="menu-icon"
    >
      <image
        height={24}
        href="https://icongr.am/fontawesome/bars.svg?size=28&color=F5CDA7"
        width={24}
      />
    </svg>
  );
}
export default MenuIcon;
