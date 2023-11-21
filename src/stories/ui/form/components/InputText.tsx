import React from "react";
import { ErrorMessage, useField } from "formik";
import {
  ErrorMessageSpan,
  Input,
  FieldContainer,
  Label,
} from "../styled-components/FormStyles";

interface Props {
  label: string;
  name: string;
  id: string;
  type?: "text" | "email" | "password" | "number";
  placeholder?: string;
  className?: string;
  isDisabled?: boolean;
  autoComplete?: "off" | "on";
  icon?: React.ReactNode;
}

function InputText({
  label,
  id,
  className = "",
  isDisabled = false,
  type,
  ...props
}: Props): React.ReactElement {
  const [field, meta] = useField(props);

  return (
    <FieldContainer>
      <Label htmlFor={id}>{label}</Label>
      <Input
        disabled={isDisabled}
        type={type}
        {...field}
        {...props}
        className={className}
      />
      {meta.touched && meta.error && (
        <ErrorMessageSpan>
          <ErrorMessage name={props.name} />
        </ErrorMessageSpan>
      )}
    </FieldContainer>
  );
}

export default InputText;
