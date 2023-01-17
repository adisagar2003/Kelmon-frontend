import axios from "axios";
import React from "react";
import { useState } from "react";
import { RingLoader } from "react-spinners";
import Sidebar from "../components/Sidebar";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  InputGroup,
  InputRightElement,
  Button,
  FormErrorMessage,
  Stack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Heading,
} from "@chakra-ui/react";

const RegisterPage = () => {
  const [image, setImage] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const form = new FormData();
  form.append("profile", image);
  form.append("user_name", userName);
  form.append("password", password);
  form.append("confirmPassword", confirmPassword);
  form.append("email", email);
  const isError = email === "";
  async function submitData(e) {
    try {
      e.preventDefault();
      setLoading(true);
      const data = await axios.post(
        `${process.env.REACT_APP_API_URL}api/v1/user`,
        form,
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      );
      setLoading(false);
      console.log(data);
    } catch (err) {
      console.log(err.response.data.error);
      setLoading(false);
      setErrorMessage(err.response.data.error);
      setError(true);
    }
  }
  return (
    <Stack direction={["row"]} gap={4}>
      {error && (
        <Alert style={{ position: "absolute", zIndex: 99 }} status="error">
          <AlertIcon />
          <AlertTitle>Error!</AlertTitle>
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      )}
      {loading && (
        <div className="Loading__bar">
          <RingLoader size={100} color="#ffffff" />
        </div>
      )}

      <Sidebar />
      <div
        className="Register__form"
        style={{
          display: "flex",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <Heading>Register</Heading>

          <form
            method="post"
            onSubmit={submitData}
            enctype="multipart/form-data"
            style={{
              display: "flex",
              gap: 10,
              flexDirection: "column",
              justifyContent: "center",
              marginTop: 30,
            }}
          >
            <FormControl isInvalid={isError}>
              <FormLabel color="white">Email</FormLabel>
              <Input
                variant="filled"
                size="lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {!isError ? (
                <FormHelperText>
                  Enter the email you'd like to receive the welcome letter.
                </FormHelperText>
              ) : (
                <FormErrorMessage color="red">
                  Email is required.
                </FormErrorMessage>
              )}
            </FormControl>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                variant="flushed"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                variant="flushed"
                type={show ? "text" : "password"}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormControl>
              <Input
                variant="flushed"
                size="lg"
                placeholder="Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </FormControl>

            <input onChange={(e) => setImage(e.target.files[0])} type="file" />
            <input type="submit" placeholder="submit" />
          </form>
        </div>
      </div>
    </Stack>
  );
};

export default RegisterPage;
