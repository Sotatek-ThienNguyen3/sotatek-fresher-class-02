import { Button, Link, Paper, TextField, Typography } from "@mui/material";
import React from "react";

export default function Login() {
  console.log("Hello Login page");

  return (
    <div
      style={{
        display: "flex", // inline css
        backgroundColor: "gray",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          backgroundColor: "cyan",
          alignItems: "center",
          // justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "red",
          }}
        >
          <h2>item 1</h2>
        </div>

        <div
          style={{
            backgroundColor: "green",
          }}
        >
          <h2>item 2</h2>
        </div>

        <div
          style={{
            backgroundColor: "blue",
          }}
        >
          <h2>item 3</h2>
        </div>
      </div>
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
          <TextField style={{ width: "100%" }}></TextField>
          <br></br>
          <br></br>
          <Typography fontSize={14}>Password</Typography>
          <TextField style={{ width: "100%" }}></TextField>
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
