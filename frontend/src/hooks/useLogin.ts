import { useEffect, useState } from "react";

export const useLogin = (): any => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleOnChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const handleOnChangePassword = (event: any) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    console.log("email", email);
  }, [email]);

  useEffect(() => {
    console.log("password", password);
  }, [password]);

  return {
    email,
    password,
    handleOnChangeEmail,
    handleOnChangePassword,
    showPassword,
    setShowPassword
  }
}