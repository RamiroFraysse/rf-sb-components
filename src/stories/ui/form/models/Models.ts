import * as Yup from "yup";


export interface Field {
  id: string;
  label: string;
  name: string;
  placeholder: string;
  autoComplete: "on" | "off";
  type:TypeInputs;
  icon?: React.ReactNode;
}

export interface FormProps {
  /**
   * Callback fired when submited form
   */
  onSubmit: <T>(values: T) => void;
  
  /**
   * Initial values of form
   */
  initialValues: { [key: string]: TypeValues };

  /**
   * Yup validation schema
   */
  validationSchema: Yup.ObjectSchema<any>;

  /**
   * Fields of form 
   */
  fields: Field[];

  /**
   * Label content
   */
  labelBtnSubmit?: React.ReactNode;

  /**
   * Attributes applied to the submit button element 
   */
  btnSubmitProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}


export type TypeValues = string | number | Date | boolean;

export type TypeInputs = "text" | "email" | "password" | "number";