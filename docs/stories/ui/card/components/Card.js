import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CardAction, CardImage, CardInformation, CardStyled, CardSubtitle, CardTitle, } from "./styled-components";
export function Card({ background, title, subtitle, information, img, children, cardStyles, navActions, actionStyles, }) {
    return (_jsxs(CardStyled, { "$background": background, "$cardStyles": cardStyles, children: [img && _jsx(CardImage, { src: img, alt: title }), _jsx(CardTitle, { children: title }), subtitle && _jsx(CardSubtitle, { children: subtitle }), information && _jsx(CardInformation, { children: information }), children && children, navActions &&
                navActions.map(({ label, onClick }) => (_jsx(CardAction, { "$actionStyles": actionStyles, onClick: onClick, children: label }, label)))] }));
}
export default Card;
