import {
  Button,
  Card,
  Center,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Radio,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { Formik, Form, Field } from "formik";

function Signup() {
  return (
    <Container>
      <Center minH="100vh">
        <Card p="6" borderRadius="1rem" w="456px">
          <Text textStyle="h1">Welcome to Crypto App</Text>
          <Text textStyle="p2" color="black.600" mt="4">
            Create a free account by filling data below.
          </Text>
          <Formik
            initialValues={{
              name: "",
              surename: "",
              email: "",
              password: "",
              repeatpassword: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {() => (
              <Form>
                <Stack mt="10" spacing={6}>
                  <Flex gap="4">
                    <Field name="name">
                      {({field, meta}) => (
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                          <FormLabel htmlFor="name">Name</FormLabel>
                          <Input
                          {...field} name="name" placeholder="Enter your Name" />
                        </FormControl>
                      )}
                    </Field>
                    <Field name="surename">
                      {({field, meta}) => (
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                          <FormLabel htmlFor="surename">Surname</FormLabel>
                          <Input
                            {...field}
                            name="surename"
                            placeholder="Enter your Surname"
                          />
                        </FormControl>
                      )}
                    </Field>
                  </Flex>
                  <Field name="email">
                    {({field, meta}) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input
                          {...field}
                          name="email"
                          type="email"
                          placeholder="Enter your Email"
                        />
                      </FormControl>
                    )}
                  </Field>
                  <Field name="password">
                    {({field, meta}) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Input
                          {...field}
                          name="password"
                          placeholder="Enter your password"
                        />
                      </FormControl>
                    )}
                  </Field>
                  <Field name="repeatpassword">
                    {() => (
                      <FormControl>
                        <FormLabel htmlFor="repeatpassword">
                          Repeat-Password
                        </FormLabel>
                        <Input
                          name="password"
                          type="password"
                          placeholder="Enter your password"
                        />
                      </FormControl>
                    )}
                  </Field>
                  <Field>
                    {() => (
                      <FormControl>
                        <Checkbox>
                          <Text textStyle="p3">
                            I agree with{" "}
                            <Text as="span" color="p.purple">
                              Terms and Conditions
                            </Text>
                          </Text>
                        </Checkbox>
                      </FormControl>
                    )}
                  </Field>
                  <Button type="submit">Create Account</Button>
                  <Text textStyle="p3" color="black.60" textAlign="center">
                    Already have an account?
                    <Link to="/Signin">
                      <Text as="span" color="p.purple">
                        Login
                      </Text>
                    </Link>
                  </Text>
                </Stack>
              </Form>
            )}
          </Formik>
        </Card>
      </Center>
    </Container>
  );
}

export default Signup;
