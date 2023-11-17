import * as Yup from "yup";
export interface Field {
  id: string;
  label: string;
  name: string;
  placeholder: string;
  autoComplete: "on" | "off";
  type:TypeInputs;
}
export interface Props {
  /**
   * callback submit form
   */
  onSubmit: <T>(values: T) => void;
  
  /**
   * initial values of form
   */
  initialValues: { [key: string]: TypeValues };

  /**
   * yup validation schema
   */
  validationSchema: Yup.ObjectSchema<any>;

  /**
   * fields of form 
   */
  fields: Field[];

  /**
   * Title of access form
   */
  formTitle?:string;
}

export type TypeValues = string | number | Date | boolean;
export type TypeInputs = "text" | "email" | "password" | "number";