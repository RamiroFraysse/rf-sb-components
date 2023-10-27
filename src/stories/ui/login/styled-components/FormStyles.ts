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
  /* relative */
  position: relative;
  min-width:500px;

  /* bg-blue-600 */
  background-color:#1d4e89; /* El color específico dependerá de tu paleta de colores. */

  /* shadow-lg */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

  /* sm:rounded-3xl */
  @media (min-width: 640px) {
    border-radius: 1.5rem; /* 3 * 0.5rem */
  }

  /* sm:p-20 */
  @media (min-width: 640px) {
    padding: 5rem; /* 20 * 0.25rem */
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
  padding: 0.5rem 1rem; /* Ajusta los valores de padding según tus necesidades */
  background-color: #6EE7B7; /* Color de fondo específico */
  color: #fff; /* Color de texto específico */
  border-radius: 15px; /* Ajusta el radio del borde según tus necesidades */
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  font-size: 1rem; /* Tamaño de fuente específico */
  line-height: 1.5;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid #007bff;
    opacity: 0.8;
  }
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const Label = styled.label`
  color: #fff;
  font-size: 1rem;
`;

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
    border: 2px solid #6EE7B7;
  }
`;

export const ErrorMessageSpan = styled.span`
  color: #e00080;
  font-weight: bold;
  font-size: 0.875rem;
`;
