import React, { useState } from "react";
import { ErrorMessage, useField } from "formik";
import {
  ErrorMessageSpan,
  IconButton,
  Input,
  InputContainer,
  FieldContainer,
  Label,
} from "../styled-components/FormStyles";
import EyeIcon from "../assets/icons/EyeIcon";
import EyeWithLineIcon from "../assets/icons/EyeWithLineIcon";

interface Props {
  label: string;
  name: string;
  id: string;
  placeholder?: string;
  className?: string;
  isDisabled?: boolean;
  autoComplete?: "off" | "on";
}

function InputPassword({
  label,
  id,
  className = "",
  isDisabled = false,
  ...props
}: Props): React.ReactElement {
  const [field, meta] = useField(props);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickIcon = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FieldContainer>
      <Label htmlFor={id}>{label}</Label>
      <InputContainer>
        <Input
          disabled={isDisabled}
          type={showPassword ? "text" : "password"}
          {...field}
          {...props}
          className={className}
        />
        <IconButton onClick={handleClickIcon}>
          {showPassword ? <EyeWithLineIcon /> : <EyeIcon />}
        </IconButton>
      </InputContainer>
      {meta.touched && meta.error && (
        <ErrorMessageSpan>
          <ErrorMessage name={props.name} />
        </ErrorMessageSpan>
      )}
    </FieldContainer>
  );
}

export default InputPassword;
