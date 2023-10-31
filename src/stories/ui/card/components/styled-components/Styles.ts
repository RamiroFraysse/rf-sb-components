import styled, { css } from "styled-components";

export const CardStyled = styled.div<{ $background?: string, $cardStyles?: React.CSSProperties }>`
  font-family: "system-ui";
  width:15rem;
  border-radius: 1rem;
  box-shadow:0px 10px 8px #999;
  display:flex;
  flex-direction: column;
  margin: .5rem;
  background-color: ${({ $background }) => $background};
  height:fit-content;
  ${({ $cardStyles }) => (
    // eslint-disable-next-line
    // @ts-ignore
    $cardStyles && css($cardStyles)
  )};
`;

export const CardTitle = styled.h2`
  margin:.5rem 5%;
`;

export const CardInformation = styled.p`
  font-size:0.875rem;
  margin:.5rem 5%;
`;

export const CardSubtitle = styled.h3`
  margin:.5rem 5%;
`;

export const CardImage = styled.img`
  width:100%;
  border-radius: 1rem 1rem 0 0;
`;

export const CardAction = styled.button<{ $actionStyles?: React.CSSProperties }>`
  text-align:center;
  width:90%;
  border-radius:5px;
  padding:.5rem 1rem;
  background-color:#6EE7B7;
  color:#000;
  font-weight:bold;
  margin:.5rem auto;
  cursor:pointer;
  border: 2px solid transparent;
  &:hover {
    border: 2px solid #007bff;
    opacity: 0.8;
  }
  ${({ $actionStyles }) => (
    // eslint-disable-next-line
    // @ts-ignore
    $actionStyles && css($actionStyles)
  )};
`;