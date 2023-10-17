export interface Props {
  className: string;
}

function CloseIcon({ className }: Props) {
  return (
    <svg
      className={className}
      key="https://icongr.am/fontawesome/close.svg?size=28&color=F5CDA7"
      height={24}
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      data-testid="close-icon"
    >
      <image
        height={24}
        href="https://icongr.am/fontawesome/close.svg?size=28&color=F5CDA7"
        width={24}
      />
    </svg>
  );
}
export default CloseIcon;
