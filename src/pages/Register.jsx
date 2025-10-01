import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

function Register() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="80vh"
    >
      <Typography variant="h5" mb={2}>
        Create Your Hireon Account
      </Typography>

      <Box width="300px">
        <TextField label="Full Name" fullWidth margin="normal" />
        <TextField label="Email" type="email" fullWidth margin="normal" />
        <TextField label="Password" type="password" fullWidth margin="normal" />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          href="/dashboard" // temporary navigation
        >
          Register
        </Button>
      </Box>

      <Typography mt={2}>
        Already have an account? <a href="/login">Login</a>
      </Typography>
    </Box>
  );
}

export default Register;
