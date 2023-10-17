import styled from "styled-components";
export const NavWrapper = styled.nav `
  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: ${(props) => props.$background};
    height: 0;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: 0.3s ease;
  }
`;
