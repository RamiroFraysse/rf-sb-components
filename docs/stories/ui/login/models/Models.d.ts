import * as Yup from "yup";
export interface Field {
    id: string;
    label: string;
    name: string;
    placeholder: string;
    autoComplete: "on" | "off";
    type: string;
}
export interface Props {
    onSubmit: <T>(values: T) => void;
    initialValues: {
        [key: string]: TypeValues;
    };
    validationSchema: Yup.ObjectSchema<any>;
    fields: Field[];
    formTitle?: string;
}
export type TypeValues = string | number | Date | boolean;
