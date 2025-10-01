import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

function Login() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="80vh"
    >
      <Typography variant="h5" mb={2}>
        Login to Hireon
      </Typography>

      <Box width="300px">
        <TextField label="Email" type="email" fullWidth margin="normal" />
        <TextField label="Password" type="password" fullWidth margin="normal" />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          href="/dashboard" // temporary navigation
        >
          Login
        </Button>
      </Box>

      <Typography mt={2}>
        Don't have an account? <a href="/register">Register</a>
      </Typography>
    </Box>
  );
}

export default Login;
