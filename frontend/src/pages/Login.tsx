import {
  Button,
  Link,
  Paper,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { ReactComponent as IconPasswordInput } from "../assets/icon-password-input.svg";
import { useLogin } from "../hooks/useLogin";

export default function Login() {
  const {
    email,
    password,
    handleOnChangeEmail,
    handleOnChangePassword,
    showPassword,
    setShowPassword,
  } = useLogin();

  return (
    <div
      style={{
        display: "flex", // inline css
        // backgroundColor: "gray",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          alignItems: "center",
        }}
      ></div>
      <div
        style={{
          flex: 1,
        }}
      >
        <Paper
          elevation={3}
          style={{
            backgroundColor: "white",
            margin: 77,
            padding: 77,
          }}
        >
          <Typography fontSize={39} fontWeight={600}>
            Sign In
          </Typography>
          <Typography
            fontSize={14}
            style={{
              marginBottom: 20,
            }}
          >
            Don't have an account?{" "}
            <Link href="https://facebook.com" target={"_blank"}>
              Sign up
            </Link>
          </Typography>
          <Typography fontSize={14}>Email address</Typography>
          <TextField
            style={{ width: "100%" }}
            value={email}
            onChange={handleOnChangeEmail}
          ></TextField>
          <br></br>
          <br></br>
          <Typography fontSize={14}>Password</Typography>
          <TextField
            style={{ width: "100%" }}
            value={password}
            onChange={handleOnChangePassword}
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <Button
                  style={{
                    height: 25,
                    width: 25,
                    backgroundColor: "white",
                  }}
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  <SvgIcon component={IconPasswordInput} inheritViewBox />
                </Button>
              ),
            }}
          ></TextField>
          <br></br>
          <br></br>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#C18FF5",
              textTransform: "none",
              width: "100%",
            }}
          >
            <Typography fontSize={14}>Sign In</Typography>
          </Button>
          <br></br>
          <br></br>
          <Typography fontSize={14}>
            <Link href="https://facebook.com">Forgot your password</Link>
          </Typography>
        </Paper>
      </div>
    </div>
  );
}
