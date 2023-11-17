import React from "react";
import {
  CardAction,
  CardImage,
  CardInformation,
  CardStyled,
  CardSubtitle,
  CardTitle,
} from "./styled-components";

export type NavAction = {
  label: string;
  onClick: () => void;
};

export interface Props {
  /**
   * Id of the card
   */
  id?: string | number;

  /**
   * Url of the image
   */
  img?: string;

  /**
   * Background of the card
   */
  background?: string;

  /**
   * Styled of the card
   */
  cardStyles?: React.CSSProperties;

  /**
   * Styles actions
   */
  actionStyles?: React.CSSProperties;

  /**
   * Title of the card
   */
  title: string;

  /**
   * Children of the card
   */
  children?: JSX.Element;

  /**
   * Description of the card
   */
  information?: string;

  /**
   * Subtitle of the card
   */
  subtitle?: string;

  /**
   * Actions of the card
   */
  navActions?: NavAction[];
}

export function Card({
  background,
  title,
  subtitle,
  information,
  img,
  children,
  cardStyles,
  navActions,
  actionStyles,
}: Props) {
  return (
    <CardStyled $background={background} $cardStyles={cardStyles}>
      {img && <CardImage src={img} alt={title} />}
      <CardTitle>{title}</CardTitle>
      {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
      {information && <CardInformation>{information}</CardInformation>}
      {children && children}
      {navActions &&
        navActions.map(({ label, onClick }: NavAction) => (
          <CardAction
            $actionStyles={actionStyles}
            key={label}
            onClick={onClick}
          >
            {label}
          </CardAction>
        ))}
    </CardStyled>
  );
}
export default Card;
