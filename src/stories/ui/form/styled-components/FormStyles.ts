import styled from "styled-components";
import { Form } from "formik";

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
`;


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

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #fff;
`;

export const SubmitButton = styled.button`
  
  width: 100%;
  display: inline-block;
  padding: 0.5rem 1rem; 
  background-color: #6EE7B7; 
  color: #fff;
  border-radius: 15px; 
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  font-size: 1rem;
  line-height: 1.5;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid #007bff;
    opacity: 0.8;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  width:100%;
`;

export const FieldContainer = styled.div`
  display:flex;
  flex-direction: column;
  gap:5px;
  align-items:start;
`;

export const Label = styled.label`
  color: #fff;
  font-size: 1rem;
  text-align: left;
`;

const paddingInput = 10;
const borderInput = 2;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border 0.2s;
  color: #fff;
  background: transparent;
  placeholder-opacity: 0.25;  
  &:focus {
    border: ${borderInput}px solid #6EE7B7;
  }
`;

export const ErrorMessageSpan = styled.span`
  color: #e00080;
  font-weight: bold;
  font-size: 0.875rem;
`;

export const IconButton = styled.a`
  cursor: pointer;
  color: #fff;
  position: absolute;
  top: calc(50% - ${paddingInput + borderInput}px);
  right: 3%;
`

