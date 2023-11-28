import {
  Background,
  Container,
  FormContainer,
  Wrapper,
} from "../styled-components/AccessFormStyles";
import { AccessFormProps } from "../models/Models";
import { Form } from "../../form/components";
import { Title } from "../../form/styled-components/FormStyles";

export function AccessForm({ formTitle, ...rest }: AccessFormProps) {
  return (
    <Wrapper>
      <Container>
        <Background />
        <FormContainer>
          {formTitle && <Title>{formTitle}</Title>}
          <Form {...rest} />
        </FormContainer>
      </Container>
    </Wrapper>
  );
}
export default AccessForm;
