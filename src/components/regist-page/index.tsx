import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { Formik, Form, FormikProps } from "formik";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { IRegister } from "../../interface";
import FormField from "./form-field";
import RegisterSchema from "./regist-schema";
import usersUrl from "../../api/api-instance";
// import axios from "axios";
import "react-toastify/ReactToastify.css";

export default function RegistPage() {
  const initialValues: IRegister = { name: "", email: "", password: "" };
  const navigate = useNavigate();

  const register = async (values: IRegister) => {
    await usersUrl.post("users", {
      name: values.name,
      email: values.email,
      password: values.password,
    });
  };

  return (
    <>
      <Box
        position="relative"
        height="100vh"
        width="100%"
        justifyContent="center"
        display="flex"
      >
        <Box
          position="relative"
          pt="100px"
          justifyContent="center"
          width="70%"
          display="flex"
        >
          <VStack>
            <Box>
              <Text fontSize="md" as="i">
                Please fill this form
              </Text>
            </Box>
            <Formik
              initialValues={initialValues}
              validationSchema={RegisterSchema}
              onSubmit={(values) => {
                register(values);
                toast.success("Registration success!", {
                  position: "top-center",
                });
                setTimeout(() => navigate("/"), 3000);
              }}
            >
              {(props: FormikProps<IRegister>) => {
                const { values, errors, touched, handleChange } = props;
                return (
                  <Form>
                    <FormField
                      name="name"
                      type="text"
                      label="Name"
                      handleChange={handleChange}
                      values={values.name}
                      touched={touched}
                      errors={errors}
                    />
                    <FormField
                      name="email"
                      type="email"
                      label="Email"
                      handleChange={handleChange}
                      values={values.email}
                      touched={touched}
                      errors={errors}
                    />
                    <FormField
                      name="password"
                      type="password"
                      label="Password"
                      handleChange={handleChange}
                      values={values.password}
                      touched={touched}
                      errors={errors}
                    />
                    <Button type="submit" mt={3}>
                      Submit
                    </Button>
                  </Form>
                );
              }}
            </Formik>
            <ToastContainer />
          </VStack>
        </Box>
      </Box>
    </>
  );
}
