import React from "react";
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
export declare function Card({ background, title, subtitle, information, img, children, cardStyles, navActions, actionStyles, }: Props): JSX.Element;
export default Card;
