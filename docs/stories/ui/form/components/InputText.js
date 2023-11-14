import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ErrorMessage, useField } from "formik";
import { ErrorMessageSpan, Input, InputContainer, Label, } from "../styled-components/FormStyles";
function InputText({ label, id, className = "", isDisabled = false, ...props }) {
    const [field, meta] = useField(props);
    return (_jsxs(InputContainer, { children: [_jsx(Label, { htmlFor: id, children: label }), _jsx(Input, { disabled: isDisabled, type: "text" // Cambia esto según el tipo
                , ...field, ...props, className: className }), meta.touched && meta.error && (_jsx(ErrorMessageSpan, { children: _jsx(ErrorMessage, { name: props.name }) }))] }));
}
export default InputText;
