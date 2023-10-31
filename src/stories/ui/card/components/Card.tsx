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
  id?: string | number;
  img?: string;
  background?: string;
  cardStyles?: React.CSSProperties;
  actionStyles?: React.CSSProperties;
  title: string;
  children?: JSX.Element;
  information?: string;
  subtitle?: string;
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
