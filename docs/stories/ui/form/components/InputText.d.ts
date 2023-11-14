import React from "react";
interface Props {
    label: string;
    name: string;
    id: string;
    type?: "text" | "email" | "password" | "number";
    placeholder?: string;
    className?: string;
    isDisabled?: boolean;
    autoComplete?: "off" | "on";
}
declare function InputText({ label, id, className, isDisabled, ...props }: Props): React.ReactElement;
export default InputText;
