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
  onSubmit: <T>(values: T) => void;
  initialValues: { [key: string]: TypeValues };
  validationSchema: Yup.ObjectSchema<any>;
  fields: Field[];
}


export type TypeValues = string | number | Date | boolean;

export type TypeInputs = "text" | "email" | "password" | "number";