import { Formik } from "formik";
import InputText from "./InputText";
import { SubmitButton, StyledForm } from "../styled-components/FormStyles";
import { Field, Props } from "../models/Models";

function Form({ onSubmit, initialValues, validationSchema, fields }: Props) {
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
            {fields.map((field: Field) => (
              <InputText
                key={`${field.id}-login-sb`}
                id={field.id}
                label={field.label}
                name={field.name}
                placeholder={field.placeholder}
                autoComplete={field.autoComplete}
              />
            ))}
            <div className="relative">
              <SubmitButton type="submit">Submit</SubmitButton>
            </div>
          </StyledForm>
        );
      }}
    </Formik>
  );
}
export default Form;
