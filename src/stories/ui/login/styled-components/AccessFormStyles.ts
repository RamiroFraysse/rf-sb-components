import styled from "styled-components";

export const FormContainer = styled.div`
  position: relative;
  min-width:500px;
  background-color:#1d4e89; 
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  @media (min-width: 640px) {
    border-radius: 1.5rem; 
  }
  @media (min-width: 640px) {
    padding: 5rem; 
  }
`;

export const Wrapper = styled.div`
  font-family: "system-ui";
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 640px) {
    padding-top: 3rem; 
    padding-bottom: 3rem;
  }
`;

export const Container = styled.div`
  position: relative;
  padding-top: 0.75rem; 

  @media (min-width: 640px) {
    max-width: 36rem; 
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Background = styled.div`
  position: absolute;
  inset:0;
  background: linear-gradient(to right, #6EE7B7, #1d4e89);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

  @media (min-width: 640px) {
    transform: rotate(-6deg);
    border-radius: 1.5rem; 
  }
`;


