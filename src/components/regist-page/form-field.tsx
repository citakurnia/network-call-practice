import { Box } from "@chakra-ui/react";
import { FormFieldProps } from "../../interface";
import { Field } from "formik";

const FormField: React.FC<FormFieldProps> = ({
  name,
  type,
  label,
  handleChange,
  values,
  touched,
  errors,
}) => {
  return (
    <>
      <Box>
        <label htmlFor={name}>{label}</label>
      </Box>
      <Field
        type={type}
        name={name}
        onChange={handleChange}
        value={values}
        style={{ background: "#F7F1E8", width: "500px" }}
      />
      <Box h="15px">
        {touched[name] && errors[name] ? (
          <Box style={{ color: "#8B0000", fontSize: "10px" }}>
            {errors[name]}
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default FormField;
