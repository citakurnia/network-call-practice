import { FormikErrors, FormikTouched } from "formik";

export interface IRegister {
    name: string;
    email: string;
    password: string;
}

export interface IUsers {
    id: string;
    name: string;
    email: string;
    password: string;
}

export interface FormFieldProps {
    name: string;
    type: string;
    label: string;
    handleChange: (e: React.ChangeEvent<any>) => void;
    values: string;
    touched: FormikTouched<{ [key: string]: boolean }>;
    errors: FormikErrors<{ [key: string]: string }>;
}
