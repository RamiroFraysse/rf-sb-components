import React from "react";
import {
  CardAction,
  CardInformation,
  CardStyled,
  CardTitle,
} from "./styled-components";

type NavAction = {
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
  navActions?: NavAction[];
}

export function Card({
  background,
  title,
  information,
  img,
  children,
  cardStyles,
  navActions,
  actionStyles,
}: Props) {
  return (
    <CardStyled $background={background} $cardStyles={cardStyles}>
      {img && <img src={img} alt={title} />}
      <CardTitle>{title}</CardTitle>
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
