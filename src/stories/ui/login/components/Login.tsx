import {
  Background,
  Container,
  LoginWrapper,
} from "../styled-components/LoginStyles";
import Form from "./Form";
import { Props } from "../models/Models";

export function Login({
  onSubmit,
  initialValues,
  validationSchema,
  fields,
  formTitle,
}: Props) {
  return (
    <LoginWrapper>
      <Container>
        <Background />
        <Form
          formTitle={formTitle}
          onSubmit={onSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
          fields={fields}
        />
      </Container>
    </LoginWrapper>
  );
}
export default Login;
