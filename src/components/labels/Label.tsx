import "./label.css";

export interface Props {
  /**
   * label message
   */
  label: string;
  /**
   * label size
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * label allcaps
   */
  allCaps?: boolean;
  /**
   * label basics colors
   */
  color?: "primary" | "secondary" | "tertiary" | "string";
  /**
   * custom font color
   */
  fontColor?: string;
  /**
   * custom background color label
   */
  backgroundColor?: string;
}

export function Label({
  allCaps = false,
  color = "primary",
  label = "No label",
  size = "normal",
  fontColor,
  backgroundColor = "transparent",
}: Props) {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor, backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
}

export default Label;
