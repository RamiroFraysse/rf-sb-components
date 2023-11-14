import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Background, Container, FormContainer, Wrapper, } from "../styled-components/AccessFormStyles";
import { Form } from "../../form/components";
import { Title } from "../../form/styled-components/FormStyles";
export function AccessForm({ onSubmit, initialValues, validationSchema, fields, formTitle, }) {
    return (_jsx(Wrapper, { children: _jsxs(Container, { children: [_jsx(Background, {}), _jsxs(FormContainer, { children: [formTitle && _jsx(Title, { children: formTitle }), _jsx(Form, { onSubmit: onSubmit, initialValues: initialValues, validationSchema: validationSchema, fields: fields })] })] }) }));
}
export default AccessForm;
