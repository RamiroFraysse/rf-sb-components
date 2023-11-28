import { Formik } from "formik";
import InputText from "./InputText";
import { SubmitButton, StyledForm } from "../styled-components/FormStyles";
import { Field, FormProps } from "../models/Models";
import InputPassword from "./InputPassword";

function Form({
  onSubmit,
  initialValues,
  validationSchema,
  fields,
  labelBtnSubmit,
  btnSubmitProps,
}: FormProps) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {() => {
        return (
          <StyledForm>
            {fields.map(
              ({ id, label, name, type, placeholder, autoComplete }: Field) => {
                if (type === "password")
                  return (
                    <InputPassword
                      key={`${id}-login-sb`}
                      id={id}
                      label={label}
                      name={name}
                      placeholder={placeholder}
                      autoComplete={autoComplete}
                    />
                  );
                return (
                  <InputText
                    key={`${id}-login-sb`}
                    id={id}
                    label={label}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                  />
                );
              }
            )}
            <div className="relative">
              <SubmitButton type="submit" {...btnSubmitProps}>
                {labelBtnSubmit || "Submit"}
              </SubmitButton>
            </div>
          </StyledForm>
        );
      }}
    </Formik>
  );
}
export default Form;
