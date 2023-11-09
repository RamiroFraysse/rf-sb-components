import {
  Background,
  Container,
  FormContainer,
  Wrapper,
} from "../styled-components/AccessFormStyles";
import { Props } from "../models/Models";
import { Form } from "../../form/components";
import { Title } from "../../form/styled-components/FormStyles";

export function AccessForm({
  onSubmit,
  initialValues,
  validationSchema,
  fields,
  formTitle,
}: Props) {
  return (
    <Wrapper>
      <Container>
        <Background />
        <FormContainer>
          {formTitle && <Title>{formTitle}</Title>}
          <Form
            onSubmit={onSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
            fields={fields}
          />
        </FormContainer>
      </Container>
    </Wrapper>
  );
}
export default AccessForm;
