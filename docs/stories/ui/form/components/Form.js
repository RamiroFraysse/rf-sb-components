import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Formik } from "formik";
import InputText from "./InputText";
import { SubmitButton, StyledForm } from "../styled-components/FormStyles";
function Form({ onSubmit, initialValues, validationSchema, fields }) {
    return (_jsx(Formik, { initialValues: initialValues, validationSchema: validationSchema, onSubmit: (values) => {
            onSubmit(values);
        }, children: () => {
            return (_jsxs(StyledForm, { children: [fields.map((field) => (_jsx(InputText, { id: field.id, label: field.label, name: field.name, placeholder: field.placeholder, autoComplete: field.autoComplete }, `${field.id}-login-sb`))), _jsx("div", { className: "relative", children: _jsx(SubmitButton, { type: "submit", children: "Submit" }) })] }));
        } }));
}
export default Form;
